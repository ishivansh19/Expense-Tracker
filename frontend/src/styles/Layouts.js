import styled from "styled-components";

export const MainLayout = styled.div`
    padding: clamp(1rem, 2vw, 2rem);
    height: 100%;
    display: flex;
    gap: clamp(1rem, 2vw, 2rem);

    @media (max-width: 768px) {  // Tablet and Mobile
        flex-direction: column;
        gap: 1rem;
    }
`;

export const InnerLayout = styled.div`
    padding: clamp(1rem, 2vw, 2rem) clamp(0.75rem, 1.5vw, 1.5rem);
    width: 100%;
`;
