import { useState, useEffect, useRef } from 'react';

const useDropdown = (initialState) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return { isOpen, toggleDropdown, dropdownRef };
};

export default useDropdown;
