import { BillboardClient } from "./components/client"

const BillboardsPage = ()=> {
    return (
       <div className="flex-col">
        <div className="flex-1 space-y-4 pt-6 p-8">
            <BillboardClient />

        </div>
       </div>
    )
}
export default BillboardsPage