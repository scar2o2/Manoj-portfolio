import React, { useState, useEffect, useRef, useContext } from 'react';
import { TabContext } from '../apps/Tab';

const TerminalBody = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const {setWhtTab,whtTab}= useContext(TabContext);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const apps = [
    { name: 'about', description: 'Display information about the developer' },
    { name: 'projects', description: 'View projects' },
    { name: 'resume', description: 'Display professional resume and experience' },
    { name: 'contact', description: 'Show contact information and social links' },
  ];

  const userInfo = {
    username: 'manoj',
    hostname: 'portfolio-system',
    shell: '/bin/zsh',
    home: '/home/manoj',
    uptime: '2 days, 14 hours',
    version: 'Portfolio OS v2.1.0'
  };

  useEffect(() => {
    setHistory([
      { type: 'output', content: `Welcome to ${userInfo.version}` },
      { type: 'output', content: `Type 'help' to see available commands` },
      { type: 'output', content: '' }
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd) => {
    const [command, ...args] = cmd.trim().split(' ');
    
    switch (command.toLowerCase()) {
      case 'help':
        return [
          'Available commands:',
          '',
          '  help              - Show this help message',
          '  ls                - List available applications',
          '  exec <app>        - Execute/open an application',
          '  whoami            - Display current user information',
          '  uname             - Show system information',
          '  uptime            - Display system uptime',
          '  date              - Show current date and time',
          '  pwd               - Print working directory',
          '  echo <message>    - Display a message',
          '  history           - Show command history',
          '  fortune           - Display a random quote',
          '  neofetch          - Display system info in style',
          '',
          'Applications:',
          ...apps.map(app => `  exec ${app.name.padEnd(12)} - ${app.description}`)
        ];

      case 'ls':
        return [
          'Available applications:',
          '',
          ...apps.map(app => `  ${app.name}`)
        ];

      case 'exec':
        if (!args[0]) {
          return ['Usage: exec <application>', 'Use "ls" to see available applications'];
        }
        const app = apps.find(a => a.name === args[0].toLowerCase());
        if (app) {
          setWhtTab([...whtTab,app.name])
          return [`Executing ${app.name}...`, `Opening ${app.description}`];
        }
        return [`Error: Application '${args[0]}' not found`, 'Use "ls" to see available applications'];

      case 'whoami':
        return [userInfo.username];

      case 'uname':
        if (args[0] === '-a') {
          return [`${userInfo.version} ${userInfo.hostname} ${userInfo.shell}`];
        }
        return [userInfo.version];

      case 'uptime':
        return [`System uptime: ${userInfo.uptime}`];

      case 'date':
        return [new Date().toString()];

      case 'pwd':
        return [userInfo.home];

      case 'echo':
        return [args.join(' ') || ''];

      case 'history':
        return commandHistory.map((cmd, index) => `${(index + 1).toString().padStart(3)} ${cmd}`);

      case 'fortune':
        const fortunes = [
          "The best way to predict the future is to create it. - Peter Drucker",
          "Code is like humor. When you have to explain it, it's bad. - Cory House",
          "First, solve the problem. Then, write the code. - John Johnson",
          "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
          "The only way to do great work is to love what you do. - Steve Jobs",
          "Innovation distinguishes between a leader and a follower. - Steve Jobs"
        ];
        return [fortunes[Math.floor(Math.random() * fortunes.length)]];

      case 'neofetch':
        return [
          { type: 'neofetch', content: `developer@portfolio-system` },
          { type: 'neofetch', content: `-------------------------` },
          { type: 'neofetch', content: `OS: Portfolio OS v2.1.0` },
          { type: 'neofetch', content: `Host: Web Browser` },
          { type: 'neofetch', content: `Kernel: React 18.x` },
          { type: 'neofetch', content: `Uptime: ${userInfo.uptime}` },
          { type: 'neofetch', content: `Packages: npm, yarn` },
          { type: 'neofetch', content: `Shell: ${userInfo.shell}` },
          { type: 'neofetch', content: `Resolution: Responsive` },
          { type: 'neofetch', content: `Terminal: Custom React Terminal` },
          { type: 'neofetch', content: `CPU: JavaScript V8 Engine` },
          { type: 'neofetch', content: `Memory: Optimized` }
        ];

      case '':
        return null;

      default:
        return [`Command not found: ${command}`, "Type 'help' for available commands"];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newCommandHistory = [...commandHistory, input];
    setCommandHistory(newCommandHistory);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'command', content: input }];
    
    const output = executeCommand(input);
    if (output !== null) {
      output.forEach(line => {
        if (typeof line === 'object' && line.type === 'neofetch') {
          newHistory.push(line);
        } else {
          newHistory.push({ type: 'output', content: line });
        }
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const getPrompt = () => {
    return `${userInfo.username}@${userInfo.hostname}:~$ `;
  };

  return (
    <div 
      className="terminal-container"
      onClick={() => inputRef.current?.focus()}
    >
      <div 
        ref={terminalRef}
        className="terminal-content"
      >
        {history.map((item, index) => (
          <div key={index} className="terminal-line">
            {item.type === 'command' ? (
              <div className="terminal-command-line">
                <span className="terminal-prompt">
                  {getPrompt()}
                </span>
                <span className="terminal-command-text">
                  {item.content}
                </span>
              </div>
            ) : item.type === 'neofetch' ? (
              <div className="terminal-neofetch">
                {item.content}
              </div>
            ) : (
              <div className="terminal-output">
                {item.content}
              </div>
            )}
          </div>
        ))}
        
        <div className="terminal-input-container">
          <span className="terminal-input-prompt">
            {getPrompt()}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalBody;