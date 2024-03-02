// separator component
const separator = () => {return (<><div className="separator"></div></>)}

// infoArea component
const infoArea = () => {
    // get all info from props
    const {region, city, IP, timeZone, postalCode, isp} = props;

    // return HTML
    return(
    <>
        <div className="InfoArea">
            <div className="infoArea_info">
                <p>
                    IP ADDRESS
                </p>
                <h2>
                    {IP}
                </h2>
            </div>
            <separator/>
            <div className="infoArea_info">
                <p>
                    LOCATION
                </p>
                <h2>
                    {city},{region}
                    <br />
                    {postalCode}
                </h2>
            </div>
            <separator />
            <div className="infoArea_info">
                <p>
                    TIMEZONE
                </p>
                <h2>
                    UTC-{timeZone}
                </h2>
            </div>
            <separator />
            <div className="infoArea_info">
                <p>
                    ISP
                </p>
                <h2>
                    {isp}
                </h2>
            </div>
        </div>
    </>
    )
};

// export component infoArea
export default infoArea;