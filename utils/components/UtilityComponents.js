"use client";

import { ThemeProvider } from "@/utils/components/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import settings from "@/settings";

// For more information and details, please visit: https://www.timeline.com/docs/utilities/utility-components
const UtilityComponents = ({ children }) => {
    
    // This section contains utility components. You can add more utilities here if needed.
    const utilities = (
        <>
            {/* This is a Toaster component for displaying toast notifications. */}
            <Toaster
                toastOptions={{
                    duration: 3000,
                }}
            />


            {/* This is a Tooltip component for displaying tooltips. */}
            <Tooltip
                id="tooltip"
                className="z-[60] !opacity-100 max-w-sm shadow-lg"
            />
        </>
    );

    return (
        <>
            {/* NextTopLoader component for displaying a loading bar at the top of the page */}
            <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />

             {/* If ENABLE_DARK_MODE is set to true, the ThemeProvider component is used to enable dark mode functionality. */}
            {settings.ENABLE_DARK_MODE ? (
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    {children}
                    {utilities}
                </ThemeProvider>
            ) : (
                <>
                    {children}
                    {utilities}
                </>
            )}
        </>
    );
};

export default UtilityComponents;