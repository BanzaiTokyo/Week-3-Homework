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

**@schelby5** self-delegate and check voting power:

```bash
npx ts-node --files ./scripts/DelegateTokens.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0xb2146a0B704Da9701D127B8722C572a6e6693EfD
```

Delegate successful 0x3e466527322772a9a6bc52e5291876fc98be883a949b41d1fbec07c7205ed6c6
Transaction hash: 0x3e466527322772a9a6bc52e5291876fc98be883a949b41d1fbec07c7205ed6c6

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0xb2146a0B704Da9701D127B8722C572a6e6693EfD
```

Account 0xb2146a0B704Da9701D127B8722C572a6e6693EfD has 20000000000000000000 units of voting power

**@Mauro.Monso** check voting power:

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x15D2Aaee6e12D9A0e893e1169D061dA07Fb92D9d
```

Output
Account 0x15D2Aaee6e12D9A0e893e1169D061dA07Fb92D9d has 0 units of voting power
Self Delegate

```bash
npx ts-node --files ./scripts/DelegateTokens.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x15D2Aaee6e12D9A0e893e1169D061dA07Fb92D9d
```

Successful delegation Transaction hash: 0x5110424c459a107c99d283e6a3f5af33968646f11909ff84ff7c1232c3d93a4e
Now I check again the voting power:

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x15D2Aaee6e12D9A0e893e1169D061dA07Fb92D9d
```

Output Account 0x15D2Aaee6e12D9A0e893e1169D061dA07Fb92D9d has 20000000000000000000 units of voting power

**@xdaloo**
Check voting power, self-delegate, recheck voting power:

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x8f63A3E5
60b4bEBCf8bF056cbb8fC8E4b36B1b80
```

Output: Account 0x8f63A3E560b4bEBCf8bF056cbb8fC8E4b36B1b80 has 0 units of voting power

```bash
npx ts-node --files ./scripts/DelegateTokens.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x8f63A3E560
b4bEBCf8bF056cbb8fC8E4b36B1b80
```

Transaction hash: 0x5d202c0e93a7cdc95d453995e39a8c55291c07f696bda454bb1e67ce57cad0af

Output : Delegate successful 0x5d202c0e93a7cdc95d453995e39a8c55291c07f696bda454bb1e67ce57cad0af

```bash
npx ts-node --files ./scripts/CheckVotingPower.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 0x8f63A3E560b4bEBCf8bF056cbb8fC8E4b36B1b80
```

Output: Account 0x8f63A3E560b4bEBCf8bF056cbb8fC8E4b36B1b80 has 20000000000000000000 units of voting power

**sanfarans**
redeploying ballot contract:

```bash
npx ts-node --files ./scripts/DeployBallotContract.ts 0xbdca53dd3a6fd9663774a6b158c7277435deab4e 5607468 chocolate vanilla potato strawberry onion
```

Transaction hash: 0x436c58de231c485d93ad768f0979c4bfcf4a0bb60f75f91ecff5c0a432848980
TokenizedBallot contract deployed to: `0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6`

voting on potato with 6 votes:

```bash
npx ts-node --files ./scripts/CastVote.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6 2 6
```

Transaction hash: 0x2a923ceb74fa913060cdc575154d20339c4b3808da4166e8587466cf492c3885

check winning proposal:

```bash
npx ts-node --files ./scripts/CheckWinningProposal.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6
```

Winning proposal name: potato

voting on onion with 9 votes:

```bash
npx ts-node --files ./scripts/CastVote.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6 4 9
```

Transaction hash: 0x2ea60fce5c2625a236b059933d71382c0e4918349cc968f9242386bf14137b4a

check winning proposal:

```bash
npx ts-node --files ./scripts/CheckWinningProposal.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6
```

Winning proposal name: onion

**@schelby5**

Voting on vanilla with 5 votes:

```bash
npx ts-node --files ./scripts/CastVote.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6 1 5
```

Voting on proposal[1] vanilla with 5 voting tokens

Transaction hash: 0x6d11e5158bfff6db27a15b196f3f8ce6d1cfa0bd379f903ef1ae8c9fef2fe7c2

Voting on strawberry with 7 votes:

```bash
npx ts-node --files ./scripts/CastVote.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6 3 7
```

Voting on proposal[3] strawberry with 7 voting tokens

Transaction hash: 0xea42203c62dcc2a540e1e16d738b40e582531b2a3e0531c1c01f9d1ee0aa8ba0

**@Mauro.monso**
Voting on Potato with 10 votes:

```bash
npx ts-node --files ./scripts/CastVote.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6 2 10
```

voter address: 0x15D2Aaee6e12D9A0e893e1169D061dA07Fb92D9d
Output:
Transaction hash: 0x379f00b1f00e960e7c9ee6219b49fa6a29cbc89280d89478174365516a01a31d

**@jvalero.dv**

Voting on Potato with 4 votes:

```bash
npx ts-node --files ./scripts/CastVote.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6 2 4
```

Transaction hash: 0x16011de27ab815f4b13d0b16eaee2bf84f66dae12eb698fa8aa5a2a765a021a9

Voting on Strawberry with 3 votes:

```bash
npx ts-node --files ./scripts/CastVote.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6 3 3
```

Transaction hash: 0x5b60eacd9776e579aaa94aa2ca02bd43696e9b27e2cecba9f03e9b988dab79ab

Attempting to vote with more votes than votes left (13):

```bash
npx ts-node --files ./scripts/CastVote.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6 3 15
```

Output: TransactionExecutionError: Execution reverted with reason: Not enough tokens to vote.

check winning proposal:

```bash
npx ts-node --files ./scripts/CheckWinningProposal.ts 0x01ccab1d1a4464535dd2f14a56ae5d72be3ae5a6
```

Output: Winning proposal name: potato
