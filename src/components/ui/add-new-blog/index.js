"use client";

import { Fragment } from "react";
import { Button } from "../button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../dialog"; // Ensure DialogDescription is imported
import { Label } from "../label";
import { Input } from "../input";

function AddNewBlog({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  setBlogFormData,
  blogFormData,
  handleSaveBlogData,
  currentEditedBlogID,
  setCurrentEditedBlogID,
}) {
  return (
    <Fragment>
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>
      <Dialog
        open={openBlogDialog}
        onOpenChange={() => {
          setOpenBlogDialog(false);
          setBlogFormData({
            title: "",
            description: "",
          });
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedBlogID ? "Edit Blog" : "Add New Blog"}
            </DialogTitle>
            <DialogDescription>
              {currentEditedBlogID
                ? "Edit the details of your blog post."
                : "Provide the details of the new blog post."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                placeholder="Enter blog title"
                value={blogFormData.title}
                onChange={(event) =>
                  setBlogFormData({
                    ...blogFormData,
                    title: event.target.value,
                  })
                }
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                value={blogFormData.description}
                onChange={(event) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: event.target.value,
                  })
                }
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveBlogData} type="button">
              {loading ? "Saving changes" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default AddNewBlog;
