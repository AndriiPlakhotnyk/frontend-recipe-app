import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  font-family: sans-serif;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const FilterInput = styled.input`
  margin-right: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

export const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

export const RecipeItem = styled.li`
  margin-bottom: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const RecipeName = styled.h2`
  margin: 0 0 0.5rem;
`;

export const FilterGroup = styled.div`
  margin-top: 1.5rem;
`;

export const FilterTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ActiveFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const FilterTag = styled.span`
  background-color: #e0e0e0;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  button {
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    color: #333;
  }
`;
export const DropdownContainer = styled.div`
  margin-top: 1rem;
   position: relative;
`;

export const DropdownHeader = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 0.6rem 1rem;
  width: 100%;
  text-align: left;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const DropdownContent = styled.div<{ $isOpen: boolean }>`
	display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
	background: white;
	border: 1px solid #ddd;
	padding: 8px;
	position: absolute;
	z-index: 10;
`;

export const DropdownItem = styled.div`
  margin-bottom: 0.3rem;
`;

export const DropdownButton = styled.button`
  padding: 0.3rem 0.6rem;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ccc;
  }
`;

export const ClearButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem 0.75rem;
  background-color: #ff6b6b;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff4c4c;
  }
`;
