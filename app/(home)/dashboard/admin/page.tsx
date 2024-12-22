import { RequestTable } from "@/components/Table/RequestTable";
import React from "react";
import DataRequest from "@/data/request.json";
import { columnsRequest } from "@/components/Table/column";
const page = () => {
  return (
    <div className=" w-full ">
      <nav className="h-[52px] border-b flex items-center px-[20px]">
        <h1 className="text-[18px] font-bold">Request List</h1>
      </nav>
      <div className="p-[20px]">
        <RequestTable columns={columnsRequest} data={DataRequest} />
      </div>
    </div>
  );
};

export default page;
