# Installation Instruction

When opening this file in gitpod the yaml ensures all the rquired pacakges are installed, but the path doesnt get set 
due to permission issues.

This is being fixed by making a bash script that sets the actual path. This need to be run everytime a new shell is
opened 

Command

`$. ./SetSolanaPath`

# Ports 
Need to open up ports 8080, 8899, 8900. See gipod yaml for this matter 

# Preliminary setup is being done with bash files 

The following will ensure you path is setup , this needs to be done everytime you open a new bash
````bash
$> . ./SetSolanPath
````

Seting up the solana devnet, getting an address and airdropping 1 sol 

```bash
$> ./SolanaAccSetup
```

