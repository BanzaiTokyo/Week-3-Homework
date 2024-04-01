## Encode Solidity Bootcamp

# Homework Week 3

by:

- Sergey Epifanov @BanzaiTokyo 0x46656d5628464fB99bE9b3d35FBbc3D185506b4A
- Mauro Monso @Mauro.Monso 0x15D2Aaee6e12D9A0e893e1169D061dA07Fb92D9d
- Loic Balum @0xcoil 0x8f63A3E560b4bEBCf8bF056cbb8fC8E4b36B1b80
- Ilya Shulman @kwindi 0x90445D3131521092DB770a8f8122268ADBD526A0.
- Josue Valero @jvalero.dv 0x765A6B5fB4aBE2381bC2Be4928F3D09C978dc5BB
- Karlo Sebalj @Schelby5 0xb2146a0B704Da9701D127B8722C572a6e6693EfD
- Jerzy Kraszewski @sanfarans2 0xb2e0DceBaB0D4233E0c1F37C809b54B90cB95E29

@jvalero.dv contract MyToken deployed at `0xbdca53dd3a6fd9663774a6b158c7277435deab4e`

Calling mint function on Mytoken contract to provide 20 tokens to each of the participants:

```bash
npx ts-node --files ./scripts/GiveVotingTokens.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x765A6B5fB4aBE2381bC2Be4928F3D09C978dc5BB 20
```

Tx hash: 0xea940f2382eff525f5b324b389b53e908947d817ce6e27388583ea3c52083f24  
Tx hash: 0x23856b1460e690a9492a8d074fa10bd1077d31c670efc7d9df96089685d6067e  
Tx hash: 0x6651c802adca9eea552585bbf777e50dcc99481204c1d6759b0a808421fb0506  
Tx hash: 0xf8371fdbf15948fb1854a8902868dd0710fb0f7fdcfb2f0de51f2cd6843afa09  
Tx hash: 0xa3a08039564ecf4b741c7bb299afa35378f17c85d9323433f9b4a4e94175ee6c  
Tx hash: 0xd580d177008df9c9a0931914a6e885642e986fdbaaef687069aaf09ee69115f6  
Tx hash: 0x9c8713d00ba56257d718aac7a109c285cf945ae97d0d84a6ad60b2c9486bee7a

**@sanfarans**

```bash
npx ts-node --files ./scripts/DeployBallotContract.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 5600947 chocolate vanilla potato strawberry onion
```

TokenizedBallot contract deployed to: `0x60238ece2cab9a9c19a579df9287e0018d878aa3`
Transaction hash: `0xfc5c190bc20670fb8d1c3b7c790caffec8ad495d87c081bed32fb8a369a263bd`

**We forgot to delegate the votes, so the ballot is useless now. Will redeploy later after some time to self-delegate the votes**

Check voting power, self-delegate, recheck voting power:

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0xb2e0DceBaB0D4233E0c1F37C809b54B90cB95E29
```

Output: Account 0xb2e0DceBaB0D4233E0c1F37C809b54B90cB95E29 has 0 units of voting power

```bash
npx ts-node --files ./scripts/DelegateTok
ens.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0xb2e0DceBaB0D4233E0c1F37C809b54B90cB95E29
```

Transaction hash: 0xc7b8c0f327f670e56f25824c8ef1b1bd0cec56d4ed00ed62da97456f270e0078

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0xb2e0DceBaB0D4233E0c1F37C809b54B90cB95E29
```

Output: Account 0xb2e0DceBaB0D4233E0c1F37C809b54B90cB95E29 has 40000000000000000000 units of voting power

**@jvalero.dv** self-delegate and check voting power:

```bash
npx ts-node --files ./scripts/DelegateTokens.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x765A6B5fB4aBE2381bC2Be4928F3D09C978dc5BB
```

Transaction hash: 0xd9483657136e988c6aa2247bbdc0588786527f9394ae768699d551a330774748

Output: Account 0x765A6B5fB4aBE2381bC2Be4928F3D09C978dc5BB has 20000000000000000000 units of voting power

**@BanzaiTokyo**  
Check voting power, self-delegate, recheck voting power:

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x46656d5628464fB99bE9b3d35FBbc3D185506b4A
```
Output: Account 0x46656d5628464fB99bE9b3d35FBbc3D185506b4A has 0 units of voting power

```bash
npx ts-node --files ./scripts/DelegateTokens.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x46656d5628464fB99bE9b3d35FBbc3D185506b4A
```
Transaction hash: 0x2b6019ca63c65dbb356b11946684ec4bc228520e395139f273fce6bc643a1f78

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x46656d5628464fB99bE9b3d35FBbc3D185506b4A
```
Output: Account 0x46656d5628464fB99bE9b3d35FBbc3D185506b4A has 20000000000000000000 units of voting power
