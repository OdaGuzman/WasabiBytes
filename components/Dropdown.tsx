import { provinces } from '../utils/Provinces';

interface DropdownProps {
  selectedProvince: string;
  onChange: (selectedProvince: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ selectedProvince, onChange }) => {
  return (
    <select
      className="border p-2 rounded"
      value={selectedProvince}
      onChange={(e) => onChange(e.target.value)}
    >
      {provinces.map((province) => (
        <option key={province} value={province}>
          {province}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
