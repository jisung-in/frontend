import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Arrow from "@/assets/img/arrow.svg";

interface DropdownProps {
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

const Dropdown = ({ items, selectedItem, setSelectedItem }: DropdownProps) => {
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
          <div className="flex items-center font-Pretendard font-medium text-[#74747B] text-[19px]">
            {selectedItem}
            <div className="ml-2">
              <Arrow />
            </div>
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white w-[358px] border border-[#BBB] rounded-[9px] absolute right-[-50px]"
          sideOffset={5}
        >
          <div className="flex text-[21px] font-bold relative border-b-[1px] border-[#D5D5D5] justify-center items-center h-[52px]">
            정렬 기준
            <DropdownMenu.Item asChild>
              <div className="absolute right-[5%] cursor-pointer">X</div>
            </DropdownMenu.Item>
          </div>
          <div className="font-Pretendard font-medium px-[5%] text-[#767676] text-[19px]">
            {items.map((item, index) => (
              <DropdownMenu.Item
                key={index}
                onClick={() => handleItemSelect(item)}
                className="className={`w-full h-[60px] flex items-center px-[5%] hover:font-semibold hover:text-black cursor-pointer"
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
