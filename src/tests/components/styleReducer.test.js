import { styleReducer } from '../../reducers/styleReducer';
import { types } from '../../types/types';


describe('Test in <styleReducer/>', () =>{

    test('Shuld return default state from style Reducer', ()=>{
        const state = styleReducer({darkMode: true},{});
        expect(state).toEqual({darkMode: true});
    })

    test('Shuld change from dark style to light style', ()=>{

        const action = {
            type: types.uiSetStyleMode
        }

        const state = styleReducer({darkMode: true},action);
        expect(state).toEqual({darkMode: false});
    })    
})