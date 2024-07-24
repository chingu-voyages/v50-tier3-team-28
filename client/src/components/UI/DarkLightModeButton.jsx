import { useState } from 'react';
import { Button } from './Button';

export const DarkLightModeButton = () => {
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle('dark');
    };

    return (
        <>
            {
                dark && <Button
                    className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                    type='button'
                    text='Light Mode'
                    onClick={() => darkModeHandler()}
                />
            }

            {
                !dark && <Button
                    className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                    type='button'
                    text='Dark Mode'
                    onClick={() => darkModeHandler()}
                />
            }
        </>
    );
};
