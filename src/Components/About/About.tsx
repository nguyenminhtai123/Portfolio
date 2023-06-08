const About = () => {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About me</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">Hi, I'm Tychicus.</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a href="/Project">
                                Project <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a href="/Portfolio">
                                Portfolio <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Đam mê</dt>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Nhiệt huyết</dt>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Năng động</dt>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Ham học hỏi</dt>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
