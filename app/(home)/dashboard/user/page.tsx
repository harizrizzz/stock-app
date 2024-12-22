import { RequestTable } from "@/components/Table/RequestTable";
import React from "react";
import DataRequest from "@/data/request.json";
import { columnsRequest } from "@/components/Table/column";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { RequestForm } from "@/components/Form/RequestForm";

const page = () => {
  return (
    <div className=" w-full ">
      <nav className="h-[52px] border-b flex items-center px-[20px] justify-between">
        <h1 className="text-[18px] font-bold">Request List</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>New Request</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a request</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col w-full">
              <RequestForm />
            </div>
          </DialogContent>
        </Dialog>
      </nav>
      <div className="p-[20px]">
        <RequestTable columns={columnsRequest} data={DataRequest} />
      </div>
    </div>
  );
};

export default page;
