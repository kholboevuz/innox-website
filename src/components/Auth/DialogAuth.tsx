import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ApplicationForm } from "./Form";

export function DialogAuth() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-sm">Loyiha yuborish</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Loyiha yuborish uchun ma'lumotlaringizni kiriting</DialogTitle>
          <DialogDescription>Barcha ma'lumot to'gri ekanligini tekshiring </DialogDescription>
        </DialogHeader>

        <div className="w-full max-w-[600px] mx-auto"> {/* Adjust the width here */}
          <ApplicationForm />
        </div>

      </DialogContent>
    </Dialog>
  );
}
