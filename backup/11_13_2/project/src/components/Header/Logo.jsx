import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    const [gif, setGif] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setGif(false);
        }, 12000);
    }, []);
    return (
        <>
            {gif ? (
                <div className='logo-gif' onClick={() => navigate('/')}>
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/refs/heads/main/Icon/YouTube_logo.webp'
                        alt='Youtube'
                    />
                </div>
            ) : (
                <div className='logo' onClick={() => navigate('/')}>
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_logo.svg'
                        alt='Youtube'
                    />
                </div>
            )}
        </>
    );
};

export default Logo;
