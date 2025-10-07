import type { FC } from 'react';

interface Props {
    searches: string[];
}



const PreviousSearches: FC<Props> = ({ searches }: Props) => {
  return (
           <div className='previous-searches'>
                <h4>Busquedas previas</h4>
                <ul className='previous-searches-list'>
                    { searches.map( (item) => ( 
                        <li key={item}> {item} </li>
                        )) 
                    }
                </ul>
            </div>
  )
}

export default PreviousSearches
