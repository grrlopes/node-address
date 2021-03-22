import { readUF } from '.'

describe('### READ UF (readUF) ###', () => {
  it('Should list all States and UF', async () => {
    const states = await readUF.listAllStates()
    expect(states).toBeDefined()
  })

  it('Should retrieve state by UF', async () => {
    const statebyUF = await readUF.listStateByUf('AM')
    expect(statebyUF.state).toStrictEqual('Amazonas')
  })
})
