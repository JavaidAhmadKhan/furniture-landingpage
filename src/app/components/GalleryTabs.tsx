import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FurnitureGallery } from "./FurnitureGallery";

export default function GalleryTabs() {
  return (
    <div className="text-center mt-[26px]">
      <Tabs
        defaultValue="all"
        className="flex flex-col
       items-center justify-center max-w-[100rem] max-auto"
      >
        <TabsList className="mb-[40px] h-12">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="bestsellers">Best Sellers</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="upcoming">Up Coming</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <FurnitureGallery />
        </TabsContent>
        <TabsContent value="bestsellers">No data available.</TabsContent>
        <TabsContent value="new">No data available.</TabsContent>
        <TabsContent value="upcoming">No data available</TabsContent>
      </Tabs>
    </div>
  );
}
