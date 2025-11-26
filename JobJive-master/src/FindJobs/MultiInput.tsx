import {
  Checkbox,
  Combobox,
  Group,
  Pill,
  PillsInput,
  useCombobox,
  Text,
  Box, 
} from '@mantine/core';
import { useState, useRef, useEffect } from 'react';
// FIX: Import the type from the correct location. 
// We use React.FC<React.SVGProps<SVGSVGElement>> as a reliable type for icon components.
import { IconSearch } from '@tabler/icons-react'; 

// Define the structure for the props expected by MultiInput
// We will replace the non-existent TablerIconsProps with a standard React component prop type
interface MultiInputProps {
  config: {
    title: string;
    // FIX APPLIED HERE: Use React.ElementType or a general function component type
    icon: React.ElementType; 
    options: string[];
  };
}

const defaultConfig = {
    title: "Job Title",
    icon: IconSearch,
    options: ['Designer', 'Developer', 'Product Manager', 'Data Analyst'],
};

const MultiInput = ({ config = defaultConfig }: MultiInputProps) => {
  
  const { title, icon: TitleIcon, options: initialOptions } = config;

  const [search, setSearch] = useState('');
  const [data, setData] = useState(initialOptions); 
  const [value, setValue] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      setIsOpen(false);
      setSearch('');
    },
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const exactOptionMatch = data.some((item) => item === search);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // --- Handlers (omitted for brevity, they are unchanged) ---
  const handleValueSelect = (val: string) => {
    setSearch('');
    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  // --- Rendering Logic (Styles maintained) ---
  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)} style={{ color: '#000' }}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            size="xs"
            color="yellow"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <Text c="dimmed">{item}</Text>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
      opened={isOpen}
      dropdownPosition="bottom"
      onTargetClick={() => setIsOpen((o) => !o)} 
    >
      <Combobox.Target>
        <PillsInput
          styles={{
            root: {
                backgroundColor: 'transparent',
                border: 'none',
                position: 'relative',
                width: '180px', 
            },
            input: {
              backgroundColor: '#3a3a3a', 
              borderColor: 'transparent',
              color: '#fff', 
              paddingLeft: '45px',
              paddingRight: '10px',
              height: '40px',
              borderRadius: '4px',
              cursor: 'pointer',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '0', 
                left: 0,
                width: isOpen ? '100%' : '0%',
                height: '2px',
                backgroundColor: 'orange', 
                transition: 'width 0.2s ease-out',
              },
            },
            section: {
                backgroundColor: 'transparent',
                color: 'orange', 
                marginLeft: '5px',
            }
          }}
          leftSection={<TitleIcon style={{ width: 20, height: 20 }} stroke={2} />}
          placeholder={value.length > 0 || isOpen ? undefined : title} 
          readOnly={!isOpen && value.length === 0}
        >
          <Pill.Group>
            {values}

            {isOpen && (
              <Combobox.EventsTarget>
                <PillsInput.Field
                  ref={inputRef}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                  value={search}
                  placeholder={`Search ${title.toLowerCase()}...`}
                  onChange={(event) => {
                    combobox.updateSelectedOptionIndex();
                    setSearch(event.currentTarget.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Backspace' && search.length === 0 && value.length > 0) {
                      event.preventDefault();
                      handleValueRemove(value[value.length - 1]);
                    }
                  }}
                />
              </Combobox.EventsTarget>
            )}
            {!isOpen && value.length === 0 && (
                <span style={{ height: '100%', display: 'inline-block' }}></span>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.Target>

      <Combobox.Dropdown style={{ backgroundColor: '#3a3a3a', borderColor: 'transparent' }}>
        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option
              value="$create"
              style={{ color: 'yellow' }} 
            >
              + Create {search}
            </Combobox.Option>
          )}

          {options.length === 0 && search.trim().length > 0 && !exactOptionMatch && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;