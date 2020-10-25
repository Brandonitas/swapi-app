import { types } from '../../types/types';


describe('Test with our types', () =>{

    test('Shuld contain the types', ()=>{
        
        expect(types).toEqual({
            uiSetStyleMode: '[ui] Set style mode'
        });
    })

  
})