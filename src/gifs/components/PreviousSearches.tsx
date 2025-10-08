import type { FC } from 'react';

interface Props {
    searches: string[];

    onLabelClick: (term: string) => void;
}

const PreviousSearches: FC<Props> = ({ searches, onLabelClick }: Props) => {
  return (
           <div className='previous-searches'>
                <h4>Busquedas previas</h4>
                <ul className='previous-searches-list'>
                    { searches.map( (term) => ( 
                        <li key={term}
                            onClick={ () => onLabelClick(term) }> {term} </li>
                        )) 
                    }
                </ul>
            </div>
  )
}

export default PreviousSearches
