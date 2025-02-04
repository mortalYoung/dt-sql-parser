import HiveSqlListener from '../../../src/lib/hive/HiveSqlListener';
import HiveSQL from '../../../src/parser/hive';


describe('Hive SQL Listener Tests', () => {
    const parser = new HiveSQL();
    test('Listener enterSelectList', async () => {
        const expectTableName = 'userName';
        const sql = `select ${expectTableName} from user1 where inc_day='20190601' limit 1000;`;
        const parserTree = parser.parse(sql);

        let result = '';
        class MyListener extends HiveSqlListener {
            enterSelect_list = (ctx): void => {
                result = ctx.getText();
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
    test('Listener enterCreateTable', async () => {
        const sql = `drop table table_name;`;
        const parserTree = parser.parse(sql);
        let result = '';
        class MyListener extends HiveSqlListener {
            enterDrop_stmt = (ctx): void => {
                result = ctx.getText();
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe('droptabletable_name');
    });
});
