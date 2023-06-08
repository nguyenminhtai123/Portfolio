import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">Tychicus Nguyễn</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">FullStack Developer</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <ArrowDownCircleIcon width={75} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
