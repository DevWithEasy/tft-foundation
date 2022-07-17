
const IsEducation = ({ssc,collage,bsc,msc}) => {
    return (
        <table className="w-full text-center mt-2">
            <thead>
                <tr className="border bg-blue-100 text-center font-bold">
                        <td>Institute Name</td>
                        <td>Season</td>
                        <td>Passing Year</td>
                        <td>Group</td>
                        <td>Result</td>
                </tr>
            </thead>
            <tbody>
                {
                    ssc.name && 
                    <tr className="hover:bg-gray-100 border">
                    <td className="text-left">{ssc.name}</td>
                    <td>{ssc.season}</td>
                    <td>{ssc.passingYear}</td>
                    <td>{ssc.group}</td>
                    <td>{ssc.result}</td>
                    </tr>
                }
                {
                    collage.name &&
                    <tr className="hover:bg-gray-100 border">
                    <td className="text-left">{collage.name}</td>
                    <td>{collage.season}</td>
                    <td>{collage.passingYear}</td>
                    <td>{collage.group}</td>
                    <td>{collage.result}</td>
                    </tr>
                }
                {
                    bsc.name &&
                    <tr className="hover:bg-gray-100 border">
                    <td className="text-left">{bsc.name}</td>
                    <td>{bsc.season}</td>
                    <td>{bsc.passingYear}</td>
                    <td>{bsc.group}</td>
                    <td>{bsc.result}</td>
                    </tr>
                }
                {
                    msc.name &&
                    <tr className="hover:bg-gray-100">
                    <td className="text-left">{msc.name}</td>
                    <td>{msc.season}</td>
                    <td>{msc.passingYear}</td>
                    <td>{msc.group}</td>
                    <td>{msc.result}</td>
                    </tr>
                }
            </tbody>
        </table>
    );
};

export default IsEducation;