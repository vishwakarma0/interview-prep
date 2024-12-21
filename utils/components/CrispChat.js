import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import settings from "@/settings";

// For more information and details, please visit: https://www.timeline.com/docs/support/crisp
const CrispChat = () => {
    useEffect(() => {
        Crisp.session.reset();
        Crisp.configure(settings.CRISP.crispSiteId);
    }, []);

    return null;
};

export default CrispChat;