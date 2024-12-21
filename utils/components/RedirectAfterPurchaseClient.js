'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectAfterPurchaseClient = ({ redirectUrl }) => {
    const router = useRouter();
    // const fallbackTimeout = 3000;

    useEffect(() => {
        // window.dataLayer = window.dataLayer || [];
        // window.dataLayer.push({
        //     'event': 'purchased_product',
        //     'eventCallback': function () {
        //         router.push(redirectUrl);
        //     },
        //     'eventTimeout': fallbackTimeout
        // });

        // setTimeout(function () {
        //     router.push(redirectUrl);
        // }, fallbackTimeout);

        router.push(redirectUrl);

    }, [redirectUrl]);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full bg-background text-foreground p-5">
            <div className="text-center">
                <p className="text-2xl leading-normal">
                    Processing your purchase. You will be redirected shortly...
                </p>
            </div>
        </div>
    );
}

export default RedirectAfterPurchaseClient;