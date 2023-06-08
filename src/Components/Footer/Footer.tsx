import React from 'react';

const Footer = () => {
    return (
        <div className="bg-white-800">
            <div className="grid grid-cols-4  bg-black text-white items-center text-center gap-1">
                <div className="col-span-4">Tailwindcss</div>
                <div>Github</div>
                <div>Instagram</div>
                <div>Facebook</div>
                <div>Linkind</div>
                <div className="col-start-1 col-end-5">© 2023 CopyRight by Tychicus Nguyen. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
