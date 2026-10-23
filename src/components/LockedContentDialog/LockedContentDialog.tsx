"use client";

import { Button } from "@components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@components/ui/dialog";
import styles from "./LockedContentDialog.module.css";

type LockedContentDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    previewText?: string;
    onSubscribe?: () => void;
};

export function LockedContentDialog({
    open,
    onOpenChange,
    title = "Заблокированный контент",
    description = "Этот контент доступен только по подписке. Оформите подписку, чтобы продолжить чтение.",
    previewText,
    onSubscribe,
}: LockedContentDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>

                <div className={styles.preview}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <p key={index} className={styles.previewParagraph}>
                            {previewText ??
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                        </p>
                    ))}
                </div>

                <div className={styles.actions}>
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Закрыть
                    </Button>
                    <Button onClick={onSubscribe}>Оформить подписку</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
