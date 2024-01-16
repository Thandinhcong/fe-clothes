import { useState } from 'react';
import {
    MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined, FundProjectionScreenOutlined, DownOutlined,
    LoginOutlined, RollbackOutlined, UploadOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Breadcrumb, Space, Avatar, Dropdown, MenuProps } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineAddBusiness } from 'react-icons/md';
const { Header, Sider, Content } = Layout;

const LayoutAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [breadcrumbItems, setBreadcrumbItems] = useState(['Admin']);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const menuItems = [
        { key: '1', icon: <FundProjectionScreenOutlined />, label: 'Dashboard', path: '/admin' },

        {
            key: 'products-management',
            icon: <MdOutlineAddBusiness />,
            label: 'Sản phẩm',
            items: [
                { key: '2', icon: <VideoCameraOutlined />, label: 'Danh sách sản phẩm', path: 'list-products' },
                { key: '3', icon: <VideoCameraOutlined />, label: 'Thêm sản phẩm', path: 'add-products' },
                { key: '4', icon: <VideoCameraOutlined />, label: 'Cập nhật sản phẩm', path: 'update-products' },
            ],
        },

        {
            key: 'categorys-management',
            icon: <MdOutlineAddBusiness />,
            label: 'Danh mục',
            items: [
                { key: '5', icon: <VideoCameraOutlined />, label: 'Danh sách danh mục', path: 'list-categorys' },
                { key: '6', icon: <VideoCameraOutlined />, label: 'Thêm danh mục', path: 'add-products' },
                { key: '7', icon: <VideoCameraOutlined />, label: 'Cập nhật danh mục', path: 'update-products' },
            ],
        },
        {
            key: 'brands-management',
            icon: <MdOutlineAddBusiness />,
            label: 'Thương hiệu',
            items: [
                { key: '8', icon: <VideoCameraOutlined />, label: 'Danh sách brands', path: 'list-brands' },
                { key: '9', icon: <VideoCameraOutlined />, label: 'Thêm brand', path: 'add-brand' },
                { key: '10', icon: <VideoCameraOutlined />, label: 'Cập nhật brand', path: 'update-brand' },
            ],
        },
        {
            key: 'account-management',
            icon: <UserOutlined />,
            label: 'Quản lý tài khoản',
            items: [
                { key: '3', label: 'Tài khoản người dùng', path: 'account-manage' },
                { key: '4', label: 'Tài khoản quản trị', path: 'user-manage' },
            ],
        },
        {
            key: 'admin-management',
            icon: <CgWebsite />,
            label: 'Quản lý Website',
            items: [
                { key: '5', icon: <UploadOutlined />, label: 'Danh mục', path: 'experience-manage' },
            ],
        },
    ];

    const items: MenuProps['items'] = [
        { label: <button className='mx-4'><LoginOutlined className='mr-2' />Logout</button>, key: '3', },
    ];
    const handleBreadcrumbClick = (key: string) => {
        const selectedMenuItem = menuItems.find(item => item.key === key);
        const parentItems = [];

        if (selectedMenuItem) {
            parentItems.push(selectedMenuItem.label);
        }

        const newBreadcrumbItems = ['Admin', ...parentItems];
        setBreadcrumbItems(newBreadcrumbItems);
    };
    return (
        <Layout className='h-screen'>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: "rgba(31,41,55)" }} width={220}>
                <div className="demo-logo-vertical flex justify-center mb-4 mt-8 mx-4 rounded-lg gap-2" >
                    <p className='font-semibold text-2xl text-white'>Admin</p>
                </div>
                <Menu
                    style={{ backgroundColor: "rgba(31,41,55)" }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    {menuItems.map((menuItem) => (
                        menuItem.items ? (
                            <Menu.SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.label}>
                                {menuItem.items.map((subItem) => (
                                    <Menu.Item key={subItem.key} onClick={() => handleBreadcrumbClick(subItem.key)}>
                                        <Link to={subItem.path}>{subItem.label}</Link>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ) : (
                            <Menu.Item key={menuItem.key} icon={menuItem.icon} onClick={() => handleBreadcrumbClick(menuItem.key)}>
                                <Link to={menuItem.path}>{menuItem.label}</Link>
                            </Menu.Item>
                        )
                    ))}
                </Menu>
            </Sider>
            <Layout className='pb-8'>
                <Header style={{ padding: 0, background: colorBgContainer }} className='flex justify-between'>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className='mr-16 flex gap-2'>
                        <div className='border-x px-6'>
                            <Space wrap size={16} className='mr-2'>
                                <Avatar size={34} icon={<UserOutlined />} />
                            </Space>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <Link className='border-l px-3' to="/">Quay lại web <RollbackOutlined /></Link>
                    </div>
                </Header>
                <Breadcrumb style={{ margin: '24px 20px' }}>
                    {breadcrumbItems.map((item, index) => (
                        <Breadcrumb.Item key={index}>
                            {item}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <Content
                    className='overflow-y-auto'
                    style={{
                        margin: '0px 20px',
                        padding: 24,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutAdmin;
