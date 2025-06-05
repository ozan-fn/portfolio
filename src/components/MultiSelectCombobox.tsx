// src/components/MultiSelectCombobox.tsx
import * as React from 'react';
import { Check, ChevronsUpDown, PlusCircle, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export interface Option {
	value: string;
	label: string;
}

interface MultiSelectComboboxProps {
	options: Option[];
	value: string[];
	onChange: (value: string[]) => void;
	onCreate?: (value: string) => void;
	placeholder?: string;
	className?: string;
}

export function MultiSelectCombobox({ options, value, onChange, onCreate, placeholder = 'Select options...', className }: MultiSelectComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [inputValue, setInputValue] = React.useState('');

	// --- OPTIMALISASI 1: Gunakan useMemo untuk mencegah kalkulasi ulang yang tidak perlu ---
	const selectedOptions = React.useMemo(() => {
		return value.map((val) => options.find((opt) => opt.value === val)).filter(Boolean) as Option[];
	}, [options, value]);

	const filteredOptions = React.useMemo(() => {
		return options.filter((option) => !value.includes(option.value));
	}, [options, value]);

	// --- OPTIMALISASI 2: Gunakan useCallback untuk menstabilkan fungsi handler ---
	const handleUnselect = React.useCallback(
		(selectedValue: string) => {
			onChange(value.filter((v) => v !== selectedValue));
		},
		[onChange, value],
	);

	const handleSelect = React.useCallback(
		(optionValue: string) => {
			onChange([...value, optionValue]);
			setInputValue('');
		},
		[onChange, value],
	);

	const handleCreate = React.useCallback(() => {
		if (onCreate && inputValue) {
			onCreate(inputValue);
			setInputValue('');
		}
	}, [onCreate, inputValue]);

	// --- PERBAIKAN UX: Hanya tampilkan opsi "Create" jika input tidak sama persis dengan opsi yang ada ---
	const canCreate = onCreate && inputValue && !options.some((opt) => opt.label.toLowerCase() === inputValue.toLowerCase());

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" role="combobox" aria-expanded={open} className={cn('h-auto min-h-10 w-full justify-between', className)} onClick={() => setOpen(!open)}>
					<div className="flex flex-wrap gap-1">
						{selectedOptions.length > 0 ? (
							selectedOptions.map((option) => (
								<Badge
									variant="secondary"
									key={option.value}
									className="mr-1"
									onClick={(e) => {
										e.stopPropagation();
										handleUnselect(option.value);
									}}
								>
									{option.label}
									<X className="ml-1 h-3 w-3 cursor-pointer" />
								</Badge>
							))
						) : (
							<span className="text-muted-foreground">{placeholder}</span>
						)}
					</div>
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[--radix-popover-trigger-width] p-0">
				<Command>
					<CommandInput placeholder="Search..." value={inputValue} onValueChange={setInputValue} />
					<CommandList>
						<CommandEmpty>
							{/* --- PERBAIKAN KETERBACAAN: Logika dipindahkan ke variabel 'canCreate' --- */}
							{canCreate ? (
								<Button variant="link" className="w-full justify-start p-1" onClick={handleCreate}>
									<PlusCircle className="mr-2 h-4 w-4" />
									Create "{inputValue}"
								</Button>
							) : (
								'No results found.'
							)}
						</CommandEmpty>
						<CommandGroup>
							{filteredOptions.map((option) => (
								<CommandItem key={option.value} onSelect={() => handleSelect(option.value)}>
									<Check className={cn('mr-2 h-4 w-4', value.includes(option.value) ? 'opacity-100' : 'opacity-0')} />
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
