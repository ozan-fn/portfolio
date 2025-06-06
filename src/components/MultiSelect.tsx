'use client';

import * as React from 'react';
import { IconCheck, IconSelector, IconCirclePlus, IconX } from '@tabler/icons-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export interface Option {
	value: string;
	label: string;
}

interface MultiSelectProps {
	options: Option[];
	value: string[];
	onChange: (value: string[]) => void;
	onCreate?: (value: string) => void;
	placeholder?: string;
	className?: string;
}

export function MultiSelect({ options, value = [], onChange, onCreate, placeholder = 'Select options...', className }: MultiSelectProps) {
	const [open, setOpen] = React.useState(false);
	const [inputValue, setInputValue] = React.useState('');

	const selectedItems = value.map((val) => options.find((opt) => opt.value === val)).filter((opt): opt is Option => !!opt);

	const unselectedOptions = options.filter((option) => !value.includes(option.value));

	const handleUnselect = (selectedValue: string) => {
		onChange(value.filter((v) => v !== selectedValue));
	};

	const handleSelect = (optionValue: string) => {
		onChange([...value, optionValue]);
		setInputValue(''); // Kosongkan input setelah memilih
		// setOpen(false); // Opsional: tutup popover setelah memilih
	};

	const handleCreate = () => {
		if (onCreate && inputValue) {
			onCreate(inputValue);
			setInputValue(''); // Kosongkan input setelah membuat
		}
	};

	const canCreate = onCreate && inputValue && !options.some((opt) => opt.label.toLowerCase() === inputValue.toLowerCase());

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" role="combobox" aria-expanded={open} className={cn('h-auto min-h-[40px] w-full justify-between px-3 py-2', className)} onClick={() => setOpen(!open)}>
					<div className="flex flex-wrap gap-2">
						{selectedItems.length > 0 ? (
							selectedItems.map((item) => (
								<Badge
									variant="secondary"
									key={item.value}
									onClick={(e) => {
										e.stopPropagation();
										handleUnselect(item.value);
									}}
								>
									{item.label}
									<IconX className="ml-1.5 h-3 w-3 cursor-pointer" />
								</Badge>
							))
						) : (
							<span className="text-muted-foreground">{placeholder}</span>
						)}
					</div>
					<IconSelector className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[--radix-popover-trigger-width] p-0">
				<Command>
					<CommandInput placeholder="Search or create..." value={inputValue} onValueChange={setInputValue} />
					<CommandList>
						<CommandEmpty>
							{canCreate ? (
								// <<< PERBAIKAN: Gunakan <div> dengan onClick, bukan <CommandItem> dengan onSelect.
								// Ini memisahkan aksi 'create' dari sistem seleksi internal 'cmdk'.
								<div className="px-4">
									<div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent" onClick={handleCreate}>
										<IconCirclePlus className="mr-2 h-4 w-4" />
										<span>Create "{inputValue}"</span>
									</div>
								</div>
							) : (
								<div className="py-6 text-center text-sm">No results found.</div>
							)}
						</CommandEmpty>

						{selectedItems.length > 0 && (
							<CommandGroup heading="Selected">
								{selectedItems.map((item) => (
									<CommandItem key={item.value} onSelect={() => handleUnselect(item.value)} className="text-primary">
										<IconCheck className="mr-2 h-4 w-4" />
										{item.label}
									</CommandItem>
								))}
							</CommandGroup>
						)}

						{unselectedOptions.length > 0 && selectedItems.length > 0 && <CommandSeparator />}
						<CommandGroup heading="Options">
							{unselectedOptions.map((option) => (
								<CommandItem key={option.value} onSelect={() => handleSelect(option.value)}>
									<div className="mr-2 h-4 w-4" />
									{option.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
