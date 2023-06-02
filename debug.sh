
geth \
--datadir dev-chain \
--dev --dev.period 0 --dev.gaslimit '9000000000000' \
--http --http.api personal,web3,eth,net --http.corsdomain "remix.ethereum.org" \
--ws --ws.origins="*" \
--password password.txt \
--mine --miner.gaslimit '9000000000000' \
--verbosity 3 

