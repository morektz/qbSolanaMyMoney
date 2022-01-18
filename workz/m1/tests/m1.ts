import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { M1 } from '../target/types/m1';

describe('m1', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.M1 as Program<M1>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
