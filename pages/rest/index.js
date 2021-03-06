
import React from "react";
import dynamic from 'next/dynamic'
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false })

export default function Rest() {

    return (
        <div className="Rest">
            <SwaggerUI
                url={`http://localhost:3000/swagger.json`}
                deepLinking={true}
                displayOperationId={true}
                filter={true}
            />
        </div>
    )
}
