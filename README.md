# CheckDot.SolanaToken

## Installation
install rust  
install solana cli  
cargo install metaboss  
cargo install spl-token-cli  

## Deploy Devnet token
metaboss create fungible -d 8 -i 10000000 -k /Users/jeremyguyet/.config/solana/id.json -m ./metadata.json --rpc https://api.devnet.solana.com

## DevNet CDT TOKEN
address: GZ7Z1B9odexp7mrfXLHzHnmysbMdM9cfnE8zLLMUUa2p  
https://explorer.solana.com/address/GZ7Z1B9odexp7mrfXLHzHnmysbMdM9cfnE8zLLMUUa2p?cluster=devnet

## token image:
https://arweave.net/0qQ9rLiXpfs3G2bcilHsDTYOtHXExocm1VBjV3BvypY

## token metadata
https://arweave.net/wc_gLPxMTk71UNRxZ8AlyAhWgzgJTgN2lKtrSupz6LA

## freeze DevNet max supply CDT TOKEN
spl-token authorize GZ7Z1B9odexp7mrfXLHzHnmysbMdM9cfnE8zLLMUUa2p mint --disable 

## Mainnet CDT TOKEN
metaboss create fungible -d 8 -i 9897808 -k /Users/jeremyguyet/.config/solana/id.json -m ./metadata.json --rpc https://api.mainnet-beta.solana.com  
  
tx creation: https://explorer.solana.com/tx/4N2HMBw9RJaVStnX8zKmpmbEiPtPRa4uwsDHEwSgP5GXX6ivpuq25cNzCp85RNmmR1UTyreK1y3hA9GQxwF3oRaQ  
  
Token address: Ak3ovnWQnAxPSFoSNCoNYJLnJtQDCKRBH4HwhWkb6hFm  
https://explorer.solana.com/address/Ak3ovnWQnAxPSFoSNCoNYJLnJtQDCKRBH4HwhWkb6hFm

Disabling Mint:  
spl-token authorize Ak3ovnWQnAxPSFoSNCoNYJLnJtQDCKRBH4HwhWkb6hFm mint --disable --url https://api.mainnet-beta.solana.com  
tx proof: https://explorer.solana.com/tx/2seeuwGZcd3r75nDeBkgrvRDdHRXrPYC8ZW7TbsUq9rxFZsQxqzx71D283W6y8uaurVgTHBpgJ2KYttFA5PSoLwg  
