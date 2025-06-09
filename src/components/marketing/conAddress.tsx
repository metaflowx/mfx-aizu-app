import Link from "next/link";
import AddressCopy from "../ui/addressCopy";
import shortenString from "@/lib/shortenString";

const ConAddress = () => {
    return (
        <>
            <div className="text-center py-8">
                <div style={{display:'flex',
                    justifyContent:'center',
                    gap:'2rem',
                    flexWrap:'wrap'
                }}>
                    {/* <Link className="text-[#2865ff] underline underline-offset-1" href={""} target="_blank">https://bscscan.com/address/0x141A753ebE663B653C7675D54D54c2e795162dee</Link> */}
                    <AddressCopy text={"0x141A753ebE663B653C7675D54D54c2e795162dee"} addresstext={shortenString('0x141A753ebE663B653C7675D54D54c2e795162dee')} hrefLink={"javascript:void(0)"} />

                    <div className="">
                        <Link
                            href="https://bscscan.com/address/0x141A753ebE663B653C7675D54D54c2e795162dee"
                            target="_blank"
                            className="inline-block text-white font-medium py-2 px-4 rounded transition"
                            style={{
                                background: "linear-gradient(90deg, rgb(40, 101, 255) 0%, rgb(221, 66, 66) 50%, rgb(40, 101, 255) 100%)",
                                borderRadius: '30px'
                            }}
                        >
                            See AIZU with BSC Explorer
                        </Link>
                    </div>


                    {/* <AddressCopy text={"https://bscscan.com/address/0x141A753ebE663B653C7675D54D54c2e795162dee"} addresstext={"Explorer Link"} hrefLink={"https://bscscan.com/address/0x141A753ebE663B653C7675D54D54c2e795162dee"}/> */}
                </div>
            </div>
        </>
    )
}

export default ConAddress;