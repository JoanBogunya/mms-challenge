import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
    Button,
    Card,
    Chip,
    Divider,
    IconButton,
    Link,
    List,
    ListItem,
    Loader,
    MarkdownContainer,
    RadioGroup,
    SpaceBetween,
    Subtitle,
    Title,
    Typography
} from './index'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../config/theme';


describe('Common Components', () => {
    it('renders Button', () => {
        render(
            <ThemeProvider theme={theme}>
                <Button>Click me</Button>
            </ThemeProvider>
        );
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders Card', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card>Card content</Card>
            </ThemeProvider>
        );
        expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders Chip', () => {
        render(
            <ThemeProvider theme={theme}>
                <Chip color="PRIMARY" >Test Chip</Chip>
            </ThemeProvider>
        );
        expect(screen.getByText('Test Chip')).toBeInTheDocument();
    });

    it('renders Divider', () => {
        render(
            <ThemeProvider theme={theme}>
                <Divider />
            </ThemeProvider>
        );
    });

    it('renders IconButton', () => {
        render(
            <ThemeProvider theme={theme}>
                <IconButton>icon</IconButton>
            </ThemeProvider>
        );
        expect(screen.getByText('icon')).toBeInTheDocument();
    });

    it('renders Link', () => {
        render(
            <ThemeProvider theme={theme}>
                <Link href="https://test.com">Test Link</Link>
            </ThemeProvider>
        );
        expect(screen.getByText('Test Link')).toHaveAttribute('href', 'https://test.com');
    });

    it('renders List', () => {
        render(
            <ThemeProvider theme={theme}>
                <List>
                    <li>Item</li>
                </List>
            </ThemeProvider>
        );
        expect(screen.getByText('Item')).toBeInTheDocument();
    });

    it('renders ListItem', () => {
        render(
            <ThemeProvider theme={theme}>
                <ListItem>Item</ListItem>
            </ThemeProvider>
        );
        expect(screen.getByText('Item')).toBeInTheDocument();
    });

    it('renders Loader', () => {
        render(
            <ThemeProvider theme={theme}>
                <Loader />
            </ThemeProvider>
        );
    });

    it('renders MarkdownContainer', () => {
        render(
            <ThemeProvider theme={theme}>
                <MarkdownContainer>Test</MarkdownContainer>
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('renders RadioGroup', () => {
        render(
            <ThemeProvider theme={theme}>
                <RadioGroup
                    options={[{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }]}
                    selected="a"
                    name="test"
                    onChange={() => { }}
                />
            </ThemeProvider>
        );
        expect(screen.getByLabelText('A')).toBeChecked();
        expect(screen.getByLabelText('B')).not.toBeChecked();
    });

    it('renders SpaceBetween', () => {
        render(
            <ThemeProvider theme={theme}>
                <SpaceBetween>
                    <span>Left</span>
                    <span>Right</span>
                </SpaceBetween>
            </ThemeProvider>
        );
        expect(screen.getByText('Left')).toBeInTheDocument();
        expect(screen.getByText('Right')).toBeInTheDocument();
    });

    it('renders Subtitle', () => {
        render(
            <ThemeProvider theme={theme}>
                <Subtitle>Subtitle</Subtitle>
            </ThemeProvider>
        );
        expect(screen.getByText('Subtitle')).toBeInTheDocument();
    });

    it('renders Title', () => {
        render(
            <ThemeProvider theme={theme}>
                <Title>Title</Title>
            </ThemeProvider>
        );
        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    it('renders Typography', () => {
        render(
            <ThemeProvider theme={theme}>
                <Typography>Text</Typography>
            </ThemeProvider>
        );
        expect(screen.getByText('Text')).toBeInTheDocument();
    });
});