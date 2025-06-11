import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a202c;
`;

export const InfoText = styled.p`
  font-size: 1.1rem;
  margin: 0.25rem 0 1rem 0;
`;

export const IngredientsList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
`;

export const IngredientItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

export const Instructions = styled.p`
  white-space: pre-line;
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const YoutubeLink = styled.a`
  display: inline-block;
  font-weight: 600;
  color: #3182ce;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #63b3ed;
  }
`;

export const Sidebar = styled.aside`
  flex: 1;
  max-width: 280px;
  background-color: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  position: sticky;
  top: 2rem; /* відступ від верху вікна при скролі */

  @media (max-width: 768px) {
    position: static;
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const SidebarItem = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  color: #2d3748;
  transition: background 0.2s;

  &:hover {
    background-color: #e2e8f0;
  }
`;
