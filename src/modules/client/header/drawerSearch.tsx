import { CloseOutlined } from '@ant-design/icons';
import { Col, Drawer, Input, Row, type GetProps } from 'antd';
type SearchProps = GetProps<typeof Input.Search>;
type PropsDrawerSearch = {
    open: boolean;
    onClose: () => void;
    className: string;
};

const DrawerSearch: React.FC<PropsDrawerSearch> = ({ open, onClose, className }) => {
    console.log('DrawerSearch render', className);
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <Drawer
            rootClassName={className}
            placement="top"
            height={100}
            width={500}
            closable={false}
            onClose={onClose}
            open={open}
        >
            <Row justify="center" align="middle" gutter={16}>
                <Col span={14} className="h-full">
                    <Input.Search
                        rootClassName={className}
                        onSearch={onSearch}
                        size="large"
                        style={{ width: '100%' }}
                    />
                </Col>
                <div className={`${className}-close-icon`} onClick={onClose}>
                    <CloseOutlined />
                </div>
            </Row>
        </Drawer>
    );
};

export default DrawerSearch;
