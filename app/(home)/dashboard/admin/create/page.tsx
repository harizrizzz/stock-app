import { RequestTable } from "@/components/Table/RequestTable";
import React from "react";
import DataItem from "@/data/item.json";
import { ItemTable } from "@/components/Table/ItemTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ItemForm } from "@/components/Form/ItemForm";
const page = () => {
  return (
    <div className=" w-full ">
      <nav className="h-[52px] border-b flex items-center px-[20px] justify-between w-">
          <h1 className="text-[18px] font-bold">Item List</h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button>New Item</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a Item</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col w-full">
                <ItemForm />
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      <div className="p-[20px]">
        <ItemTable data={DataItem} />
      </div>
    </div>
  );
};

export default page;
