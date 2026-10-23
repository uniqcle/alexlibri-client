"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select";
import styles from "./FilterSelect.module.css";

type Option = {
    label: string;
    value: string;
};

type FilterSelectProps = {
    label: string;
    options: Option[];
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    groupLabel?: string;
    onChange?: (value: string) => void;
    className?: string;
};

export function FilterSelect({
    label,
    options,
    value,
    defaultValue = "all",
    placeholder,
    groupLabel,
    onChange,
    className,
}: FilterSelectProps) {
    const isControlled = value !== undefined;

    return (
        <div className={`${styles.filterGroup} ${className ?? ""}`}>
            <div className={styles.filterLabel}>{label}</div>

            <Select
                key={isControlled ? value : "uncontrolled"} // 👈 пересоздать при смене value
                items={options}
                value={isControlled ? value : undefined}
                defaultValue={isControlled ? undefined : defaultValue}
                onValueChange={onChange}
            >
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent
                    className={styles.selectContent}
                    side="bottom"
                    align="center"
                    sideOffset={3}
                    alignItemWithTrigger={false}
                >
                    <SelectGroup>
                        {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
                        {options.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
