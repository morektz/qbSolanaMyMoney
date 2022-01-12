# Wed 12 Jan 2022 03:03:47 PM UTC

Note these errors popup when trying to do this project on gitpod directly which is a cloud ide

.json output 

```
Config File: /home/gitpod/.config/solana/cli/config.yml
RPC URL: http://localhost:8899 
WebSocket URL: ws://localhost:8900/ (computed)
Keypair Path: /workspace/qbSolanaMyMoney/workz/mykey.json 
Commitment: confirmed 
```

# This is the list of errors which keep showing up 
.


https://github.com/ritwickdey/vscode-live-server/issues/541 
quote

```
I managed to figure out what it was on my end. I was trying to get a package running (in particular, JQuery File Manager) and the package was trying to use Node.JS server calls to get the files on my server. Since it was only running through Live Server and not an actual Node server, it freaked out and this error was brought up. My fix was to actually transform my project into a real Node server.
```

Then Look for how to install nodejs server 

https://ccoenraets.github.io/ionic-tutorial/start-node-server.html

Not official but has the commands
