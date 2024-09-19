import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  //   DialogDescription,
  //   DialogHeader,
  //   DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
export default function PopupButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-6 p-7 dark:text-white text-lg font-rubikMedium w-full">
          Enquire Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader> */}
        <form>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name
              </Label>
              <Input
                required
                id="name"
                defaultValue=""
                className="col-span-3 outline-none"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mobile" className="text-right">
                Mobile No
              </Label>
              <Input
                required
                id="mobile"
                defaultValue=""
                className="col-span-3 outline-none"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Message
              </Label>
              <Textarea
                required
                id="message"
                defaultValue=""
                className="col-span-3 outline-none"
              />
            </div>
          </div>
          <DialogFooter>
            <Button className="text-white" type="submit">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
