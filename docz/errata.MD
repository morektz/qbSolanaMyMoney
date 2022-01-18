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

Here trying to fix port issues , for getting 405 errors 


https://github.com/ritwickdey/vscode-live-server/issues/541 
quote

```
I managed to figure out what it was on my end. I was trying to get a package running (in particular, JQuery File Manager) and the package was trying to use Node.JS server calls to get the files on my server. Since it was only running through Live Server and not an actual Node server, it freaked out and this error was brought up. My fix was to actually transform my project into a real Node server.
```

Then Look for how to install nodejs server 

https://ccoenraets.github.io/ionic-tutorial/start-node-server.html

Not official but has the commands

# Helpers for following the quest 

This main [quest](https://openquest.xyz/quest/solana-my-money) needs helpers to understad and avoid errors

Using [this](https://learn.figment.io/tutorials/generative-nfts-on-solana-with-candy-machine-v2-and-hashlips) one which is has the steps mentioned in better  detail
- Problems are with creating the key and air dropping sol 

# Problems and solutions 

## Problems 

In this quest - https://openquest.xyz/quest/solana-my-money 

you have the following commands 

``` 
solana config set --url localhost # This is for setting the local host 
```

While on the devent you cant just airdop 100 tokens , instead you need to do 1 at a time

## Solutions 

The above command is somehow throwing all kinds of errors, in fact both `testnet` & `localhost` were both not allowing the airdrop of any coins. This issue was resolved when choosing `devnet` , This immediately solved the problem of communication. Also note since this is a cloud env it was important to both open all the required portsa, and also make them public 

## Anchor Build Error 

When it talks about adding some manifest it means rust needs to be reinstalled 

```
rustup default nightly && rustup update
```

## build spdf error 

This error will occur after you run the rust update it means its missing important tooling. This can be fixed by 

```
rustup toolchain add 1.53
```

When you get the following error 

```bash
error: no such subcommand: `build-bpf`
```

This means your solana path is not set correctly , run - When openign this in the cloud 
`. ./SetSolanaPath`