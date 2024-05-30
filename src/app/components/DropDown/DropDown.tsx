import Arrow from "@/assets/img/arrow.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface DropdownProps {
  items: string[];
  selectedItem: string;
  className?: string;
  setSelectedItem: any;
}

const Dropdown = ({
  items,
  selectedItem,
  className,
  setSelectedItem,
}: DropdownProps) => {
  const handleItemSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="IconButton flex align-center"
          aria-label="Customise options"
        >
          <div className="flex items-center font-Pretendard font-medium text-[#74747B] text-[19px] sm:text-[12px]">
            {selectedItem}
            <div className="ml-2">
              <Arrow />
            </div>
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`bg-white w-[358px] sm:w-[150px] border border-[#BBB] rounded-[9px] absolute right-[-50px] ${className}`}
          sideOffset={5}
        >
          <div className="flex text-[21px] sm:text-[14px] font-bold relative border-b-[1px] border-[#D5D5D5] justify-center items-center h-[52px]">
            정렬 기준
            <DropdownMenu.Item asChild>
              <div className="absolute right-[5%] cursor-pointer sm:hidden">
                X
              </div>
            </DropdownMenu.Item>
          </div>
          <div className="font-Pretendard font-medium px-[5%] text-[#767676] text-[19px]">
            {items.map((item, index) => (
              <DropdownMenu.Item
                key={index}
                onClick={() => handleItemSelect(item)}
                className="className={`w-full h-[60px] flex items-center px-[5%] hover:font-semibold hover:text-black cursor-pointer sm:text-[14px]"
              >
                {item}
              </DropdownMenu.Item>
            ))}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
