// dt-sql-parser/src/grammar/spark/SparkSql.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";

import SparkSqlBaseLexer from "./base/SparkSqlBaseLexer";

export default class SparkSqlLexer extends SparkSqlBaseLexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly ADD = 11;
	public static readonly AFTER = 12;
	public static readonly ALL = 13;
	public static readonly ALTER = 14;
	public static readonly ANALYZE = 15;
	public static readonly AND = 16;
	public static readonly ANTI = 17;
	public static readonly ANY = 18;
	public static readonly ARCHIVE = 19;
	public static readonly ARRAY = 20;
	public static readonly AS = 21;
	public static readonly ASC = 22;
	public static readonly AT = 23;
	public static readonly AUTHORIZATION = 24;
	public static readonly BETWEEN = 25;
	public static readonly BOTH = 26;
	public static readonly BUCKET = 27;
	public static readonly BUCKETS = 28;
	public static readonly BY = 29;
	public static readonly CACHE = 30;
	public static readonly CASCADE = 31;
	public static readonly CASE = 32;
	public static readonly CAST = 33;
	public static readonly CHANGE = 34;
	public static readonly CHECK = 35;
	public static readonly CLEAR = 36;
	public static readonly CLUSTER = 37;
	public static readonly CLUSTERED = 38;
	public static readonly CODEGEN = 39;
	public static readonly COLLATE = 40;
	public static readonly COLLECTION = 41;
	public static readonly COLUMN = 42;
	public static readonly COLUMNS = 43;
	public static readonly COMMENT = 44;
	public static readonly COMMIT = 45;
	public static readonly COMPACT = 46;
	public static readonly COMPACTIONS = 47;
	public static readonly COMPUTE = 48;
	public static readonly CONCATENATE = 49;
	public static readonly CONSTRAINT = 50;
	public static readonly COST = 51;
	public static readonly CREATE = 52;
	public static readonly CROSS = 53;
	public static readonly CUBE = 54;
	public static readonly CURRENT = 55;
	public static readonly CURRENT_DATE = 56;
	public static readonly CURRENT_TIME = 57;
	public static readonly CURRENT_TIMESTAMP = 58;
	public static readonly CURRENT_USER = 59;
	public static readonly DATA = 60;
	public static readonly DATABASE = 61;
	public static readonly DATABASES = 62;
	public static readonly DBPROPERTIES = 63;
	public static readonly DEFINED = 64;
	public static readonly DELETE = 65;
	public static readonly DELIMITED = 66;
	public static readonly DESC = 67;
	public static readonly DESCRIBE = 68;
	public static readonly DFS = 69;
	public static readonly DIRECTORIES = 70;
	public static readonly DIRECTORY = 71;
	public static readonly DISTINCT = 72;
	public static readonly DISTRIBUTE = 73;
	public static readonly DIV = 74;
	public static readonly DROP = 75;
	public static readonly ELSE = 76;
	public static readonly END = 77;
	public static readonly ESCAPE = 78;
	public static readonly ESCAPED = 79;
	public static readonly EXCEPT = 80;
	public static readonly EXCHANGE = 81;
	public static readonly EXISTS = 82;
	public static readonly EXPLAIN = 83;
	public static readonly EXPORT = 84;
	public static readonly EXTENDED = 85;
	public static readonly EXTERNAL = 86;
	public static readonly EXTRACT = 87;
	public static readonly FALSE = 88;
	public static readonly FETCH = 89;
	public static readonly FIELDS = 90;
	public static readonly FILTER = 91;
	public static readonly FILEFORMAT = 92;
	public static readonly FIRST = 93;
	public static readonly FOLLOWING = 94;
	public static readonly FOR = 95;
	public static readonly FOREIGN = 96;
	public static readonly FORMAT = 97;
	public static readonly FORMATTED = 98;
	public static readonly FROM = 99;
	public static readonly FULL = 100;
	public static readonly FUNCTION = 101;
	public static readonly FUNCTIONS = 102;
	public static readonly GLOBAL = 103;
	public static readonly GRANT = 104;
	public static readonly GROUP = 105;
	public static readonly GROUPING = 106;
	public static readonly HAVING = 107;
	public static readonly IF = 108;
	public static readonly IGNORE = 109;
	public static readonly IMPORT = 110;
	public static readonly IN = 111;
	public static readonly INDEX = 112;
	public static readonly INDEXES = 113;
	public static readonly INNER = 114;
	public static readonly INPATH = 115;
	public static readonly INPUTFORMAT = 116;
	public static readonly INSERT = 117;
	public static readonly INTERSECT = 118;
	public static readonly INTERVAL = 119;
	public static readonly INTO = 120;
	public static readonly IS = 121;
	public static readonly ITEMS = 122;
	public static readonly JOIN = 123;
	public static readonly KEYS = 124;
	public static readonly LAST = 125;
	public static readonly LATERAL = 126;
	public static readonly LAZY = 127;
	public static readonly LEADING = 128;
	public static readonly LEFT = 129;
	public static readonly LIKE = 130;
	public static readonly LIMIT = 131;
	public static readonly LINES = 132;
	public static readonly LIST = 133;
	public static readonly LOAD = 134;
	public static readonly LOCAL = 135;
	public static readonly LOCATION = 136;
	public static readonly LOCK = 137;
	public static readonly LOCKS = 138;
	public static readonly LOGICAL = 139;
	public static readonly MACRO = 140;
	public static readonly MAP = 141;
	public static readonly MATCHED = 142;
	public static readonly MERGE = 143;
	public static readonly MSCK = 144;
	public static readonly NAMESPACE = 145;
	public static readonly NAMESPACES = 146;
	public static readonly NATURAL = 147;
	public static readonly NO = 148;
	public static readonly NOT = 149;
	public static readonly NULL = 150;
	public static readonly NULLS = 151;
	public static readonly OF = 152;
	public static readonly ON = 153;
	public static readonly ONLY = 154;
	public static readonly OPTION = 155;
	public static readonly OPTIONS = 156;
	public static readonly OR = 157;
	public static readonly ORDER = 158;
	public static readonly OUT = 159;
	public static readonly OUTER = 160;
	public static readonly OUTPUTFORMAT = 161;
	public static readonly OVER = 162;
	public static readonly OVERLAPS = 163;
	public static readonly OVERLAY = 164;
	public static readonly OVERWRITE = 165;
	public static readonly PARTITION = 166;
	public static readonly PARTITIONED = 167;
	public static readonly PARTITIONS = 168;
	public static readonly PERCENTLIT = 169;
	public static readonly PIVOT = 170;
	public static readonly PLACING = 171;
	public static readonly POSITION = 172;
	public static readonly PRECEDING = 173;
	public static readonly PRIMARY = 174;
	public static readonly PRINCIPALS = 175;
	public static readonly PROPERTIES = 176;
	public static readonly PURGE = 177;
	public static readonly QUERY = 178;
	public static readonly RANGE = 179;
	public static readonly RECORDREADER = 180;
	public static readonly RECORDWRITER = 181;
	public static readonly RECOVER = 182;
	public static readonly REDUCE = 183;
	public static readonly REFERENCES = 184;
	public static readonly REFRESH = 185;
	public static readonly RENAME = 186;
	public static readonly REPAIR = 187;
	public static readonly REPLACE = 188;
	public static readonly RESET = 189;
	public static readonly RESTRICT = 190;
	public static readonly REVOKE = 191;
	public static readonly RIGHT = 192;
	public static readonly RLIKE = 193;
	public static readonly ROLE = 194;
	public static readonly ROLES = 195;
	public static readonly ROLLBACK = 196;
	public static readonly ROLLUP = 197;
	public static readonly ROW = 198;
	public static readonly ROWS = 199;
	public static readonly SCHEMA = 200;
	public static readonly SELECT = 201;
	public static readonly SEMI = 202;
	public static readonly SEPARATED = 203;
	public static readonly SERDE = 204;
	public static readonly SERDEPROPERTIES = 205;
	public static readonly SESSION_USER = 206;
	public static readonly SET = 207;
	public static readonly SETMINUS = 208;
	public static readonly SETS = 209;
	public static readonly SHOW = 210;
	public static readonly SKEWED = 211;
	public static readonly SOME = 212;
	public static readonly SORT = 213;
	public static readonly SORTED = 214;
	public static readonly START = 215;
	public static readonly STATISTICS = 216;
	public static readonly STORED = 217;
	public static readonly STRATIFY = 218;
	public static readonly STRUCT = 219;
	public static readonly SUBSTR = 220;
	public static readonly SUBSTRING = 221;
	public static readonly TABLE = 222;
	public static readonly TABLES = 223;
	public static readonly TABLESAMPLE = 224;
	public static readonly TBLPROPERTIES = 225;
	public static readonly TEMPORARY = 226;
	public static readonly TERMINATED = 227;
	public static readonly THEN = 228;
	public static readonly TIME = 229;
	public static readonly TO = 230;
	public static readonly TOUCH = 231;
	public static readonly TRAILING = 232;
	public static readonly TRANSACTION = 233;
	public static readonly TRANSACTIONS = 234;
	public static readonly TRANSFORM = 235;
	public static readonly TRIM = 236;
	public static readonly TRUE = 237;
	public static readonly TRUNCATE = 238;
	public static readonly TYPE = 239;
	public static readonly UNARCHIVE = 240;
	public static readonly UNBOUNDED = 241;
	public static readonly UNCACHE = 242;
	public static readonly UNION = 243;
	public static readonly UNIQUE = 244;
	public static readonly UNKNOWN = 245;
	public static readonly UNLOCK = 246;
	public static readonly UNSET = 247;
	public static readonly UPDATE = 248;
	public static readonly USE = 249;
	public static readonly USER = 250;
	public static readonly USING = 251;
	public static readonly VALUES = 252;
	public static readonly VIEW = 253;
	public static readonly VIEWS = 254;
	public static readonly WHEN = 255;
	public static readonly WHERE = 256;
	public static readonly WINDOW = 257;
	public static readonly WITH = 258;
	public static readonly ZONE = 259;
	public static readonly EQ = 260;
	public static readonly NSEQ = 261;
	public static readonly NEQ = 262;
	public static readonly NEQJ = 263;
	public static readonly LT = 264;
	public static readonly LTE = 265;
	public static readonly GT = 266;
	public static readonly GTE = 267;
	public static readonly PLUS = 268;
	public static readonly MINUS = 269;
	public static readonly ASTERISK = 270;
	public static readonly SLASH = 271;
	public static readonly PERCENT = 272;
	public static readonly TILDE = 273;
	public static readonly AMPERSAND = 274;
	public static readonly PIPE = 275;
	public static readonly CONCAT_PIPE = 276;
	public static readonly HAT = 277;
	public static readonly SEMICOLON = 278;
	public static readonly STRING = 279;
	public static readonly BIGINT_LITERAL = 280;
	public static readonly SMALLINT_LITERAL = 281;
	public static readonly TINYINT_LITERAL = 282;
	public static readonly INTEGER_VALUE = 283;
	public static readonly EXPONENT_VALUE = 284;
	public static readonly DECIMAL_VALUE = 285;
	public static readonly FLOAT_LITERAL = 286;
	public static readonly DOUBLE_LITERAL = 287;
	public static readonly BIGDECIMAL_LITERAL = 288;
	public static readonly IDENTIFIER = 289;
	public static readonly BACKQUOTED_IDENTIFIER = 290;
	public static readonly CUSTOM_VARS = 291;
	public static readonly SIMPLE_COMMENT = 292;
	public static readonly BRACKETED_COMMENT = 293;
	public static readonly WS = 294;
	public static readonly UNRECOGNIZED = 295;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'('", "')'", "','", 
                                                   "'.'", "'/*+'", "'*/'", 
                                                   "'->'", "'['", "']'", 
                                                   "':'", "'ADD'", "'AFTER'", 
                                                   "'ALL'", "'ALTER'", "'ANALYZE'", 
                                                   "'AND'", "'ANTI'", "'ANY'", 
                                                   "'ARCHIVE'", "'ARRAY'", 
                                                   "'AS'", "'ASC'", "'AT'", 
                                                   "'AUTHORIZATION'", "'BETWEEN'", 
                                                   "'BOTH'", "'BUCKET'", 
                                                   "'BUCKETS'", "'BY'", 
                                                   "'CACHE'", "'CASCADE'", 
                                                   "'CASE'", "'CAST'", "'CHANGE'", 
                                                   "'CHECK'", "'CLEAR'", 
                                                   "'CLUSTER'", "'CLUSTERED'", 
                                                   "'CODEGEN'", "'COLLATE'", 
                                                   "'COLLECTION'", "'COLUMN'", 
                                                   "'COLUMNS'", "'COMMENT'", 
                                                   "'COMMIT'", "'COMPACT'", 
                                                   "'COMPACTIONS'", "'COMPUTE'", 
                                                   "'CONCATENATE'", "'CONSTRAINT'", 
                                                   "'COST'", "'CREATE'", 
                                                   "'CROSS'", "'CUBE'", 
                                                   "'CURRENT'", "'CURRENT_DATE'", 
                                                   "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
                                                   "'CURRENT_USER'", "'DATA'", 
                                                   "'DATABASE'", null, "'DBPROPERTIES'", 
                                                   "'DEFINED'", "'DELETE'", 
                                                   "'DELIMITED'", "'DESC'", 
                                                   "'DESCRIBE'", "'DFS'", 
                                                   "'DIRECTORIES'", "'DIRECTORY'", 
                                                   "'DISTINCT'", "'DISTRIBUTE'", 
                                                   "'DIV'", "'DROP'", "'ELSE'", 
                                                   "'END'", "'ESCAPE'", 
                                                   "'ESCAPED'", "'EXCEPT'", 
                                                   "'EXCHANGE'", "'EXISTS'", 
                                                   "'EXPLAIN'", "'EXPORT'", 
                                                   "'EXTENDED'", "'EXTERNAL'", 
                                                   "'EXTRACT'", "'FALSE'", 
                                                   "'FETCH'", "'FIELDS'", 
                                                   "'FILTER'", "'FILEFORMAT'", 
                                                   "'FIRST'", "'FOLLOWING'", 
                                                   "'FOR'", "'FOREIGN'", 
                                                   "'FORMAT'", "'FORMATTED'", 
                                                   "'FROM'", "'FULL'", "'FUNCTION'", 
                                                   "'FUNCTIONS'", "'GLOBAL'", 
                                                   "'GRANT'", "'GROUP'", 
                                                   "'GROUPING'", "'HAVING'", 
                                                   "'IF'", "'IGNORE'", "'IMPORT'", 
                                                   "'IN'", "'INDEX'", "'INDEXES'", 
                                                   "'INNER'", "'INPATH'", 
                                                   "'INPUTFORMAT'", "'INSERT'", 
                                                   "'INTERSECT'", "'INTERVAL'", 
                                                   "'INTO'", "'IS'", "'ITEMS'", 
                                                   "'JOIN'", "'KEYS'", "'LAST'", 
                                                   "'LATERAL'", "'LAZY'", 
                                                   "'LEADING'", "'LEFT'", 
                                                   "'LIKE'", "'LIMIT'", 
                                                   "'LINES'", "'LIST'", 
                                                   "'LOAD'", "'LOCAL'", 
                                                   "'LOCATION'", "'LOCK'", 
                                                   "'LOCKS'", "'LOGICAL'", 
                                                   "'MACRO'", "'MAP'", "'MATCHED'", 
                                                   "'MERGE'", "'MSCK'", 
                                                   "'NAMESPACE'", "'NAMESPACES'", 
                                                   "'NATURAL'", "'NO'", 
                                                   null, "'NULL'", "'NULLS'", 
                                                   "'OF'", "'ON'", "'ONLY'", 
                                                   "'OPTION'", "'OPTIONS'", 
                                                   "'OR'", "'ORDER'", "'OUT'", 
                                                   "'OUTER'", "'OUTPUTFORMAT'", 
                                                   "'OVER'", "'OVERLAPS'", 
                                                   "'OVERLAY'", "'OVERWRITE'", 
                                                   "'PARTITION'", "'PARTITIONED'", 
                                                   "'PARTITIONS'", "'PERCENT'", 
                                                   "'PIVOT'", "'PLACING'", 
                                                   "'POSITION'", "'PRECEDING'", 
                                                   "'PRIMARY'", "'PRINCIPALS'", 
                                                   "'PROPERTIES'", "'PURGE'", 
                                                   "'QUERY'", "'RANGE'", 
                                                   "'RECORDREADER'", "'RECORDWRITER'", 
                                                   "'RECOVER'", "'REDUCE'", 
                                                   "'REFERENCES'", "'REFRESH'", 
                                                   "'RENAME'", "'REPAIR'", 
                                                   "'REPLACE'", "'RESET'", 
                                                   "'RESTRICT'", "'REVOKE'", 
                                                   "'RIGHT'", null, "'ROLE'", 
                                                   "'ROLES'", "'ROLLBACK'", 
                                                   "'ROLLUP'", "'ROW'", 
                                                   "'ROWS'", "'SCHEMA'", 
                                                   "'SELECT'", "'SEMI'", 
                                                   "'SEPARATED'", "'SERDE'", 
                                                   "'SERDEPROPERTIES'", 
                                                   "'SESSION_USER'", "'SET'", 
                                                   "'MINUS'", "'SETS'", 
                                                   "'SHOW'", "'SKEWED'", 
                                                   "'SOME'", "'SORT'", "'SORTED'", 
                                                   "'START'", "'STATISTICS'", 
                                                   "'STORED'", "'STRATIFY'", 
                                                   "'STRUCT'", "'SUBSTR'", 
                                                   "'SUBSTRING'", "'TABLE'", 
                                                   "'TABLES'", "'TABLESAMPLE'", 
                                                   "'TBLPROPERTIES'", null, 
                                                   "'TERMINATED'", "'THEN'", 
                                                   "'TIME'", "'TO'", "'TOUCH'", 
                                                   "'TRAILING'", "'TRANSACTION'", 
                                                   "'TRANSACTIONS'", "'TRANSFORM'", 
                                                   "'TRIM'", "'TRUE'", "'TRUNCATE'", 
                                                   "'TYPE'", "'UNARCHIVE'", 
                                                   "'UNBOUNDED'", "'UNCACHE'", 
                                                   "'UNION'", "'UNIQUE'", 
                                                   "'UNKNOWN'", "'UNLOCK'", 
                                                   "'UNSET'", "'UPDATE'", 
                                                   "'USE'", "'USER'", "'USING'", 
                                                   "'VALUES'", "'VIEW'", 
                                                   "'VIEWS'", "'WHEN'", 
                                                   "'WHERE'", "'WINDOW'", 
                                                   "'WITH'", "'ZONE'", null, 
                                                   "'<=>'", "'<>'", "'!='", 
                                                   "'<'", null, "'>'", null, 
                                                   "'+'", "'-'", "'*'", 
                                                   "'/'", "'%'", "'~'", 
                                                   "'&'", "'|'", "'||'", 
                                                   "'^'", "';'" ];
	public static readonly symbolicNames: string[] = [ null, null, null, null, 
                                                    null, null, null, null, 
                                                    null, null, null, "ADD", 
                                                    "AFTER", "ALL", "ALTER", 
                                                    "ANALYZE", "AND", "ANTI", 
                                                    "ANY", "ARCHIVE", "ARRAY", 
                                                    "AS", "ASC", "AT", "AUTHORIZATION", 
                                                    "BETWEEN", "BOTH", "BUCKET", 
                                                    "BUCKETS", "BY", "CACHE", 
                                                    "CASCADE", "CASE", "CAST", 
                                                    "CHANGE", "CHECK", "CLEAR", 
                                                    "CLUSTER", "CLUSTERED", 
                                                    "CODEGEN", "COLLATE", 
                                                    "COLLECTION", "COLUMN", 
                                                    "COLUMNS", "COMMENT", 
                                                    "COMMIT", "COMPACT", 
                                                    "COMPACTIONS", "COMPUTE", 
                                                    "CONCATENATE", "CONSTRAINT", 
                                                    "COST", "CREATE", "CROSS", 
                                                    "CUBE", "CURRENT", "CURRENT_DATE", 
                                                    "CURRENT_TIME", "CURRENT_TIMESTAMP", 
                                                    "CURRENT_USER", "DATA", 
                                                    "DATABASE", "DATABASES", 
                                                    "DBPROPERTIES", "DEFINED", 
                                                    "DELETE", "DELIMITED", 
                                                    "DESC", "DESCRIBE", 
                                                    "DFS", "DIRECTORIES", 
                                                    "DIRECTORY", "DISTINCT", 
                                                    "DISTRIBUTE", "DIV", 
                                                    "DROP", "ELSE", "END", 
                                                    "ESCAPE", "ESCAPED", 
                                                    "EXCEPT", "EXCHANGE", 
                                                    "EXISTS", "EXPLAIN", 
                                                    "EXPORT", "EXTENDED", 
                                                    "EXTERNAL", "EXTRACT", 
                                                    "FALSE", "FETCH", "FIELDS", 
                                                    "FILTER", "FILEFORMAT", 
                                                    "FIRST", "FOLLOWING", 
                                                    "FOR", "FOREIGN", "FORMAT", 
                                                    "FORMATTED", "FROM", 
                                                    "FULL", "FUNCTION", 
                                                    "FUNCTIONS", "GLOBAL", 
                                                    "GRANT", "GROUP", "GROUPING", 
                                                    "HAVING", "IF", "IGNORE", 
                                                    "IMPORT", "IN", "INDEX", 
                                                    "INDEXES", "INNER", 
                                                    "INPATH", "INPUTFORMAT", 
                                                    "INSERT", "INTERSECT", 
                                                    "INTERVAL", "INTO", 
                                                    "IS", "ITEMS", "JOIN", 
                                                    "KEYS", "LAST", "LATERAL", 
                                                    "LAZY", "LEADING", "LEFT", 
                                                    "LIKE", "LIMIT", "LINES", 
                                                    "LIST", "LOAD", "LOCAL", 
                                                    "LOCATION", "LOCK", 
                                                    "LOCKS", "LOGICAL", 
                                                    "MACRO", "MAP", "MATCHED", 
                                                    "MERGE", "MSCK", "NAMESPACE", 
                                                    "NAMESPACES", "NATURAL", 
                                                    "NO", "NOT", "NULL", 
                                                    "NULLS", "OF", "ON", 
                                                    "ONLY", "OPTION", "OPTIONS", 
                                                    "OR", "ORDER", "OUT", 
                                                    "OUTER", "OUTPUTFORMAT", 
                                                    "OVER", "OVERLAPS", 
                                                    "OVERLAY", "OVERWRITE", 
                                                    "PARTITION", "PARTITIONED", 
                                                    "PARTITIONS", "PERCENTLIT", 
                                                    "PIVOT", "PLACING", 
                                                    "POSITION", "PRECEDING", 
                                                    "PRIMARY", "PRINCIPALS", 
                                                    "PROPERTIES", "PURGE", 
                                                    "QUERY", "RANGE", "RECORDREADER", 
                                                    "RECORDWRITER", "RECOVER", 
                                                    "REDUCE", "REFERENCES", 
                                                    "REFRESH", "RENAME", 
                                                    "REPAIR", "REPLACE", 
                                                    "RESET", "RESTRICT", 
                                                    "REVOKE", "RIGHT", "RLIKE", 
                                                    "ROLE", "ROLES", "ROLLBACK", 
                                                    "ROLLUP", "ROW", "ROWS", 
                                                    "SCHEMA", "SELECT", 
                                                    "SEMI", "SEPARATED", 
                                                    "SERDE", "SERDEPROPERTIES", 
                                                    "SESSION_USER", "SET", 
                                                    "SETMINUS", "SETS", 
                                                    "SHOW", "SKEWED", "SOME", 
                                                    "SORT", "SORTED", "START", 
                                                    "STATISTICS", "STORED", 
                                                    "STRATIFY", "STRUCT", 
                                                    "SUBSTR", "SUBSTRING", 
                                                    "TABLE", "TABLES", "TABLESAMPLE", 
                                                    "TBLPROPERTIES", "TEMPORARY", 
                                                    "TERMINATED", "THEN", 
                                                    "TIME", "TO", "TOUCH", 
                                                    "TRAILING", "TRANSACTION", 
                                                    "TRANSACTIONS", "TRANSFORM", 
                                                    "TRIM", "TRUE", "TRUNCATE", 
                                                    "TYPE", "UNARCHIVE", 
                                                    "UNBOUNDED", "UNCACHE", 
                                                    "UNION", "UNIQUE", "UNKNOWN", 
                                                    "UNLOCK", "UNSET", "UPDATE", 
                                                    "USE", "USER", "USING", 
                                                    "VALUES", "VIEW", "VIEWS", 
                                                    "WHEN", "WHERE", "WINDOW", 
                                                    "WITH", "ZONE", "EQ", 
                                                    "NSEQ", "NEQ", "NEQJ", 
                                                    "LT", "LTE", "GT", "GTE", 
                                                    "PLUS", "MINUS", "ASTERISK", 
                                                    "SLASH", "PERCENT", 
                                                    "TILDE", "AMPERSAND", 
                                                    "PIPE", "CONCAT_PIPE", 
                                                    "HAT", "SEMICOLON", 
                                                    "STRING", "BIGINT_LITERAL", 
                                                    "SMALLINT_LITERAL", 
                                                    "TINYINT_LITERAL", "INTEGER_VALUE", 
                                                    "EXPONENT_VALUE", "DECIMAL_VALUE", 
                                                    "FLOAT_LITERAL", "DOUBLE_LITERAL", 
                                                    "BIGDECIMAL_LITERAL", 
                                                    "IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
                                                    "CUSTOM_VARS", "SIMPLE_COMMENT", 
                                                    "BRACKETED_COMMENT", 
                                                    "WS", "UNRECOGNIZED" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "ADD", "AFTER", "ALL", "ALTER", "ANALYZE", "AND", "ANTI", "ANY", 
		"ARCHIVE", "ARRAY", "AS", "ASC", "AT", "AUTHORIZATION", "BETWEEN", "BOTH", 
		"BUCKET", "BUCKETS", "BY", "CACHE", "CASCADE", "CASE", "CAST", "CHANGE", 
		"CHECK", "CLEAR", "CLUSTER", "CLUSTERED", "CODEGEN", "COLLATE", "COLLECTION", 
		"COLUMN", "COLUMNS", "COMMENT", "COMMIT", "COMPACT", "COMPACTIONS", "COMPUTE", 
		"CONCATENATE", "CONSTRAINT", "COST", "CREATE", "CROSS", "CUBE", "CURRENT", 
		"CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "CURRENT_USER", "DATA", 
		"DATABASE", "DATABASES", "DBPROPERTIES", "DEFINED", "DELETE", "DELIMITED", 
		"DESC", "DESCRIBE", "DFS", "DIRECTORIES", "DIRECTORY", "DISTINCT", "DISTRIBUTE", 
		"DIV", "DROP", "ELSE", "END", "ESCAPE", "ESCAPED", "EXCEPT", "EXCHANGE", 
		"EXISTS", "EXPLAIN", "EXPORT", "EXTENDED", "EXTERNAL", "EXTRACT", "FALSE", 
		"FETCH", "FIELDS", "FILTER", "FILEFORMAT", "FIRST", "FOLLOWING", "FOR", 
		"FOREIGN", "FORMAT", "FORMATTED", "FROM", "FULL", "FUNCTION", "FUNCTIONS", 
		"GLOBAL", "GRANT", "GROUP", "GROUPING", "HAVING", "IF", "IGNORE", "IMPORT", 
		"IN", "INDEX", "INDEXES", "INNER", "INPATH", "INPUTFORMAT", "INSERT", 
		"INTERSECT", "INTERVAL", "INTO", "IS", "ITEMS", "JOIN", "KEYS", "LAST", 
		"LATERAL", "LAZY", "LEADING", "LEFT", "LIKE", "LIMIT", "LINES", "LIST", 
		"LOAD", "LOCAL", "LOCATION", "LOCK", "LOCKS", "LOGICAL", "MACRO", "MAP", 
		"MATCHED", "MERGE", "MSCK", "NAMESPACE", "NAMESPACES", "NATURAL", "NO", 
		"NOT", "NULL", "NULLS", "OF", "ON", "ONLY", "OPTION", "OPTIONS", "OR", 
		"ORDER", "OUT", "OUTER", "OUTPUTFORMAT", "OVER", "OVERLAPS", "OVERLAY", 
		"OVERWRITE", "PARTITION", "PARTITIONED", "PARTITIONS", "PERCENTLIT", "PIVOT", 
		"PLACING", "POSITION", "PRECEDING", "PRIMARY", "PRINCIPALS", "PROPERTIES", 
		"PURGE", "QUERY", "RANGE", "RECORDREADER", "RECORDWRITER", "RECOVER", 
		"REDUCE", "REFERENCES", "REFRESH", "RENAME", "REPAIR", "REPLACE", "RESET", 
		"RESTRICT", "REVOKE", "RIGHT", "RLIKE", "ROLE", "ROLES", "ROLLBACK", "ROLLUP", 
		"ROW", "ROWS", "SCHEMA", "SELECT", "SEMI", "SEPARATED", "SERDE", "SERDEPROPERTIES", 
		"SESSION_USER", "SET", "SETMINUS", "SETS", "SHOW", "SKEWED", "SOME", "SORT", 
		"SORTED", "START", "STATISTICS", "STORED", "STRATIFY", "STRUCT", "SUBSTR", 
		"SUBSTRING", "TABLE", "TABLES", "TABLESAMPLE", "TBLPROPERTIES", "TEMPORARY", 
		"TERMINATED", "THEN", "TIME", "TO", "TOUCH", "TRAILING", "TRANSACTION", 
		"TRANSACTIONS", "TRANSFORM", "TRIM", "TRUE", "TRUNCATE", "TYPE", "UNARCHIVE", 
		"UNBOUNDED", "UNCACHE", "UNION", "UNIQUE", "UNKNOWN", "UNLOCK", "UNSET", 
		"UPDATE", "USE", "USER", "USING", "VALUES", "VIEW", "VIEWS", "WHEN", "WHERE", 
		"WINDOW", "WITH", "ZONE", "EQ", "NSEQ", "NEQ", "NEQJ", "LT", "LTE", "GT", 
		"GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", "TILDE", "AMPERSAND", 
		"PIPE", "CONCAT_PIPE", "HAT", "SEMICOLON", "STRING", "BIGINT_LITERAL", 
		"SMALLINT_LITERAL", "TINYINT_LITERAL", "INTEGER_VALUE", "EXPONENT_VALUE", 
		"DECIMAL_VALUE", "FLOAT_LITERAL", "DOUBLE_LITERAL", "BIGDECIMAL_LITERAL", 
		"IDENTIFIER", "BACKQUOTED_IDENTIFIER", "CUSTOM_VARS", "DECIMAL_DIGITS", 
		"EXPONENT", "DIGIT", "LETTER", "SIMPLE_COMMENT", "BRACKETED_COMMENT", 
		"WS", "UNRECOGNIZED",
	];

	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, SparkSqlLexer._ATN, SparkSqlLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "SparkSql.g4"; }

	public get literalNames(): (string | null)[] { return SparkSqlLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return SparkSqlLexer.symbolicNames; }
	public get ruleNames(): string[] { return SparkSqlLexer.ruleNames; }

	public get serializedATN(): number[] { return SparkSqlLexer._serializedATN; }

	public get channelNames(): string[] { return SparkSqlLexer.channelNames; }

	public get modeNames(): string[] { return SparkSqlLexer.modeNames; }

	// @Override
	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 283:
			return this.EXPONENT_VALUE_sempred(localctx, predIndex);
		case 284:
			return this.DECIMAL_VALUE_sempred(localctx, predIndex);
		case 285:
			return this.FLOAT_LITERAL_sempred(localctx, predIndex);
		case 286:
			return this.DOUBLE_LITERAL_sempred(localctx, predIndex);
		case 287:
			return this.BIGDECIMAL_LITERAL_sempred(localctx, predIndex);
		case 296:
			return this.BRACKETED_COMMENT_sempred(localctx, predIndex);
		}
		return true;
	}
	private EXPONENT_VALUE_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.isValidDecimal();
		}
		return true;
	}
	private DECIMAL_VALUE_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.isValidDecimal();
		}
		return true;
	}
	private FLOAT_LITERAL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.isValidDecimal();
		}
		return true;
	}
	private DOUBLE_LITERAL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.isValidDecimal();
		}
		return true;
	}
	private BIGDECIMAL_LITERAL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.isValidDecimal();
		}
		return true;
	}
	private BRACKETED_COMMENT_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return !this.isHint();
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,0,295,2740,6,-1,2,
	0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,
	9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,
	67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,
	7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,
	81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
	2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,
	96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,
	2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
	2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
	2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,
	2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,
	2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,
	2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,
	2,139,7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,
	2,145,7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,
	2,151,7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,
	2,157,7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,
	2,163,7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,
	2,169,7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
	2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
	2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,
	2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,
	2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,
	2,199,7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,
	2,205,7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,
	2,211,7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,
	2,217,7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,
	2,223,7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,
	2,229,7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,
	2,235,7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
	2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,7,246,
	2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,2,252,7,252,
	2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,7,257,2,258,7,258,
	2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,2,263,7,263,2,264,7,264,
	2,265,7,265,2,266,7,266,2,267,7,267,2,268,7,268,2,269,7,269,2,270,7,270,
	2,271,7,271,2,272,7,272,2,273,7,273,2,274,7,274,2,275,7,275,2,276,7,276,
	2,277,7,277,2,278,7,278,2,279,7,279,2,280,7,280,2,281,7,281,2,282,7,282,
	2,283,7,283,2,284,7,284,2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,
	2,289,7,289,2,290,7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,
	2,295,7,295,2,296,7,296,2,297,7,297,2,298,7,298,1,0,1,0,1,1,1,1,1,2,1,2,
	1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,
	1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,
	13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,
	1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,
	18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,
	1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
	23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,
	1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,32,1,
	32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,
	1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,
	36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,
	1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,
	40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,
	1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,
	43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,
	1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,
	1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,
	54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,
	1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,
	56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,
	58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,
	61,1,61,1,61,1,61,1,61,1,61,3,61,1021,8,61,1,62,1,62,1,62,1,62,1,62,1,62,
	1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,
	63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,
	1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,
	67,1,67,1,67,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,
	1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,
	71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,
	1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,
	75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,
	1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,
	79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,
	1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,
	83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,
	1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,
	86,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,1,89,1,89,
	1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,
	91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,92,
	1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,
	95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,
	1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,
	98,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,
	100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,
	102,1,102,1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,1,
	103,1,104,1,104,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,
	105,1,105,1,105,1,105,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,
	107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,
	109,1,109,1,109,1,109,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,
	111,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,
	113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,115,1,115,1,
	115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,116,1,116,1,
	116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,
	117,1,117,1,117,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,
	119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,
	121,1,121,1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,1,
	124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,
	125,1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,127,1,
	127,1,127,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,1,
	130,1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,
	132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,134,1,134,1,
	134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,
	135,1,136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,
	138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,
	139,1,139,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,141,1,
	141,1,141,1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,
	143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,
	145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,146,1,146,1,
	146,1,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,148,1,148,1,148,1,
	148,3,148,1630,8,148,1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,
	150,1,150,1,150,1,151,1,151,1,151,1,152,1,152,1,152,1,153,1,153,1,153,1,
	153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,155,1,155,1,155,1,
	155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,1,157,1,157,1,157,1,157,1,
	157,1,157,1,158,1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,159,1,
	160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,
	160,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,162,1,162,1,162,1,
	162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,164,1,
	164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,
	165,1,165,1,165,1,165,1,165,1,165,1,165,1,166,1,166,1,166,1,166,1,166,1,
	166,1,166,1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,
	167,1,167,1,167,1,167,1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,
	168,1,168,1,169,1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,170,1,
	170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,
	171,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,173,1,
	173,1,173,1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,1,
	174,1,174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,
	175,1,175,1,175,1,175,1,175,1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,
	177,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,1,179,1,
	179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,
	180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,
	180,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,1,
	182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,
	183,1,183,1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,
	185,1,185,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,
	186,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,
	188,1,188,1,188,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,
	190,1,190,1,190,1,190,1,190,1,190,1,190,1,191,1,191,1,191,1,191,1,191,1,
	191,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,3,
	192,1976,8,192,1,193,1,193,1,193,1,193,1,193,1,194,1,194,1,194,1,194,1,
	194,1,194,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,196,1,
	196,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,198,1,198,1,
	198,1,198,1,198,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,200,1,200,1,
	200,1,200,1,200,1,200,1,200,1,201,1,201,1,201,1,201,1,201,1,202,1,202,1,
	202,1,202,1,202,1,202,1,202,1,202,1,202,1,202,1,203,1,203,1,203,1,203,1,
	203,1,203,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,
	204,1,204,1,204,1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,
	205,1,205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,207,1,
	207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,1,208,1,208,1,209,1,209,1,
	209,1,209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,211,1,211,1,
	211,1,211,1,211,1,212,1,212,1,212,1,212,1,212,1,213,1,213,1,213,1,213,1,
	213,1,213,1,213,1,214,1,214,1,214,1,214,1,214,1,214,1,215,1,215,1,215,1,
	215,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,
	216,1,216,1,216,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,
	218,1,218,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,219,1,219,1,
	219,1,219,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,
	221,1,221,1,221,1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,1,222,1,
	222,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,
	223,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,
	224,1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,
	225,1,225,1,225,1,225,3,225,2231,8,225,1,226,1,226,1,226,1,226,1,226,1,
	226,1,226,1,226,1,226,1,226,1,226,1,227,1,227,1,227,1,227,1,227,1,228,1,
	228,1,228,1,228,1,228,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,
	230,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,232,1,232,1,
	232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,233,1,233,1,
	233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,234,1,
	234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,235,1,235,1,235,1,
	235,1,235,1,236,1,236,1,236,1,236,1,236,1,237,1,237,1,237,1,237,1,237,1,
	237,1,237,1,237,1,237,1,238,1,238,1,238,1,238,1,238,1,239,1,239,1,239,1,
	239,1,239,1,239,1,239,1,239,1,239,1,239,1,240,1,240,1,240,1,240,1,240,1,
	240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,
	241,1,242,1,242,1,242,1,242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,1,
	243,1,243,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,245,1,245,1,
	245,1,245,1,245,1,245,1,245,1,246,1,246,1,246,1,246,1,246,1,246,1,247,1,
	247,1,247,1,247,1,247,1,247,1,247,1,248,1,248,1,248,1,248,1,249,1,249,1,
	249,1,249,1,249,1,250,1,250,1,250,1,250,1,250,1,250,1,251,1,251,1,251,1,
	251,1,251,1,251,1,251,1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,253,1,
	253,1,253,1,253,1,254,1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,1,
	255,1,255,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,257,1,257,1,257,1,
	257,1,257,1,258,1,258,1,258,1,258,1,258,1,259,1,259,1,259,3,259,2464,8,
	259,1,260,1,260,1,260,1,260,1,261,1,261,1,261,1,262,1,262,1,262,1,263,1,
	263,1,264,1,264,1,264,1,264,3,264,2482,8,264,1,265,1,265,1,266,1,266,1,
	266,1,266,3,266,2490,8,266,1,267,1,267,1,268,1,268,1,269,1,269,1,270,1,
	270,1,271,1,271,1,272,1,272,1,273,1,273,1,274,1,274,1,275,1,275,1,275,1,
	276,1,276,1,277,1,277,1,278,1,278,1,278,1,278,5,278,2519,8,278,10,278,12,
	278,2522,9,278,1,278,1,278,1,278,1,278,1,278,5,278,2529,8,278,10,278,12,
	278,2532,9,278,1,278,3,278,2535,8,278,1,279,4,279,2538,8,279,11,279,12,
	279,2539,1,279,1,279,1,280,4,280,2545,8,280,11,280,12,280,2546,1,280,1,
	280,1,281,4,281,2552,8,281,11,281,12,281,2553,1,281,1,281,1,282,4,282,2559,
	8,282,11,282,12,282,2560,1,283,4,283,2564,8,283,11,283,12,283,2565,1,283,
	1,283,1,283,1,283,1,283,1,283,3,283,2574,8,283,1,284,1,284,1,284,1,285,
	4,285,2580,8,285,11,285,12,285,2581,1,285,3,285,2585,8,285,1,285,1,285,
	1,285,1,285,3,285,2591,8,285,1,285,1,285,1,285,3,285,2596,8,285,1,286,4,
	286,2599,8,286,11,286,12,286,2600,1,286,3,286,2604,8,286,1,286,1,286,1,
	286,1,286,3,286,2610,8,286,1,286,1,286,1,286,3,286,2615,8,286,1,287,4,287,
	2618,8,287,11,287,12,287,2619,1,287,3,287,2623,8,287,1,287,1,287,1,287,
	1,287,1,287,3,287,2630,8,287,1,287,1,287,1,287,1,287,1,287,3,287,2637,8,
	287,1,288,1,288,1,288,1,288,4,288,2643,8,288,11,288,12,288,2644,1,289,1,
	289,1,289,1,289,5,289,2651,8,289,10,289,12,289,2654,9,289,1,289,1,289,1,
	290,1,290,1,290,1,290,1,290,1,290,1,291,4,291,2665,8,291,11,291,12,291,
	2666,1,291,1,291,5,291,2671,8,291,10,291,12,291,2674,9,291,1,291,1,291,
	4,291,2678,8,291,11,291,12,291,2679,3,291,2682,8,291,1,292,1,292,3,292,
	2686,8,292,1,292,4,292,2689,8,292,11,292,12,292,2690,1,293,1,293,1,294,
	1,294,1,295,1,295,1,295,1,295,1,295,1,295,5,295,2703,8,295,10,295,12,295,
	2706,9,295,1,295,3,295,2709,8,295,1,295,3,295,2712,8,295,1,295,1,295,1,
	296,1,296,1,296,1,296,1,296,1,296,5,296,2722,8,296,10,296,12,296,2725,9,
	296,1,296,1,296,1,296,1,296,1,296,1,297,4,297,2733,8,297,11,297,12,297,
	2734,1,297,1,297,1,298,1,298,1,2723,0,299,1,1,3,2,5,3,7,4,9,5,11,6,13,7,
	15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,
	20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,
	32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,
	44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,
	55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,64,129,65,
	131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,73,147,74,149,75,151,
	76,153,77,155,78,157,79,159,80,161,81,163,82,165,83,167,84,169,85,171,86,
	173,87,175,88,177,89,179,90,181,91,183,92,185,93,187,94,189,95,191,96,193,
	97,195,98,197,99,199,100,201,101,203,102,205,103,207,104,209,105,211,106,
	213,107,215,108,217,109,219,110,221,111,223,112,225,113,227,114,229,115,
	231,116,233,117,235,118,237,119,239,120,241,121,243,122,245,123,247,124,
	249,125,251,126,253,127,255,128,257,129,259,130,261,131,263,132,265,133,
	267,134,269,135,271,136,273,137,275,138,277,139,279,140,281,141,283,142,
	285,143,287,144,289,145,291,146,293,147,295,148,297,149,299,150,301,151,
	303,152,305,153,307,154,309,155,311,156,313,157,315,158,317,159,319,160,
	321,161,323,162,325,163,327,164,329,165,331,166,333,167,335,168,337,169,
	339,170,341,171,343,172,345,173,347,174,349,175,351,176,353,177,355,178,
	357,179,359,180,361,181,363,182,365,183,367,184,369,185,371,186,373,187,
	375,188,377,189,379,190,381,191,383,192,385,193,387,194,389,195,391,196,
	393,197,395,198,397,199,399,200,401,201,403,202,405,203,407,204,409,205,
	411,206,413,207,415,208,417,209,419,210,421,211,423,212,425,213,427,214,
	429,215,431,216,433,217,435,218,437,219,439,220,441,221,443,222,445,223,
	447,224,449,225,451,226,453,227,455,228,457,229,459,230,461,231,463,232,
	465,233,467,234,469,235,471,236,473,237,475,238,477,239,479,240,481,241,
	483,242,485,243,487,244,489,245,491,246,493,247,495,248,497,249,499,250,
	501,251,503,252,505,253,507,254,509,255,511,256,513,257,515,258,517,259,
	519,260,521,261,523,262,525,263,527,264,529,265,531,266,533,267,535,268,
	537,269,539,270,541,271,543,272,545,273,547,274,549,275,551,276,553,277,
	555,278,557,279,559,280,561,281,563,282,565,283,567,284,569,285,571,286,
	573,287,575,288,577,289,579,290,581,291,583,0,585,0,587,0,589,0,591,292,
	593,293,595,294,597,295,1,0,8,2,0,39,39,92,92,2,0,34,34,92,92,1,0,96,96,
	2,0,43,43,45,45,1,0,48,57,1,0,65,90,2,0,10,10,13,13,3,0,9,10,13,13,32,32,
	2784,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
	0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
	0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,
	0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,
	0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,
	0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,
	0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,
	0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,
	0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,
	0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,
	0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,
	0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,
	0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,
	141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,
	1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,
	0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,
	0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,
	0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,
	0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,
	203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,
	1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,
	0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,
	0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,
	0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,0,0,
	0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,0,
	265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,275,
	1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,
	0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,
	0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,
	0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,
	0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,
	327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,337,
	1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,0,0,0,347,1,
	0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,0,
	0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,
	0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,
	0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,
	389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,
	1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,1,
	0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,419,1,0,
	0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,429,1,0,0,
	0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,1,0,0,0,0,439,1,0,0,0,
	0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,1,0,0,0,0,449,1,0,0,0,0,
	451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,461,
	1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,
	0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,
	0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,
	0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,
	0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,0,0,0,0,
	513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,521,1,0,0,0,0,523,
	1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,0,0,0,531,1,0,0,0,0,533,1,
	0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,0,0,541,1,0,0,0,0,543,1,0,
	0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,0,
	0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,563,1,0,0,0,
	0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,573,1,0,0,0,0,
	575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,0,0,0,0,591,1,0,0,0,0,593,
	1,0,0,0,0,595,1,0,0,0,0,597,1,0,0,0,1,599,1,0,0,0,3,601,1,0,0,0,5,603,1,
	0,0,0,7,605,1,0,0,0,9,607,1,0,0,0,11,611,1,0,0,0,13,614,1,0,0,0,15,617,
	1,0,0,0,17,619,1,0,0,0,19,621,1,0,0,0,21,623,1,0,0,0,23,627,1,0,0,0,25,
	633,1,0,0,0,27,637,1,0,0,0,29,643,1,0,0,0,31,651,1,0,0,0,33,655,1,0,0,0,
	35,660,1,0,0,0,37,664,1,0,0,0,39,672,1,0,0,0,41,678,1,0,0,0,43,681,1,0,
	0,0,45,685,1,0,0,0,47,688,1,0,0,0,49,702,1,0,0,0,51,710,1,0,0,0,53,715,
	1,0,0,0,55,722,1,0,0,0,57,730,1,0,0,0,59,733,1,0,0,0,61,739,1,0,0,0,63,
	747,1,0,0,0,65,752,1,0,0,0,67,757,1,0,0,0,69,764,1,0,0,0,71,770,1,0,0,0,
	73,776,1,0,0,0,75,784,1,0,0,0,77,794,1,0,0,0,79,802,1,0,0,0,81,810,1,0,
	0,0,83,821,1,0,0,0,85,828,1,0,0,0,87,836,1,0,0,0,89,844,1,0,0,0,91,851,
	1,0,0,0,93,859,1,0,0,0,95,871,1,0,0,0,97,879,1,0,0,0,99,891,1,0,0,0,101,
	902,1,0,0,0,103,907,1,0,0,0,105,914,1,0,0,0,107,920,1,0,0,0,109,925,1,0,
	0,0,111,933,1,0,0,0,113,946,1,0,0,0,115,959,1,0,0,0,117,977,1,0,0,0,119,
	990,1,0,0,0,121,995,1,0,0,0,123,1020,1,0,0,0,125,1022,1,0,0,0,127,1035,
	1,0,0,0,129,1043,1,0,0,0,131,1050,1,0,0,0,133,1060,1,0,0,0,135,1065,1,0,
	0,0,137,1074,1,0,0,0,139,1078,1,0,0,0,141,1090,1,0,0,0,143,1100,1,0,0,0,
	145,1109,1,0,0,0,147,1120,1,0,0,0,149,1124,1,0,0,0,151,1129,1,0,0,0,153,
	1134,1,0,0,0,155,1138,1,0,0,0,157,1145,1,0,0,0,159,1153,1,0,0,0,161,1160,
	1,0,0,0,163,1169,1,0,0,0,165,1176,1,0,0,0,167,1184,1,0,0,0,169,1191,1,0,
	0,0,171,1200,1,0,0,0,173,1209,1,0,0,0,175,1217,1,0,0,0,177,1223,1,0,0,0,
	179,1229,1,0,0,0,181,1236,1,0,0,0,183,1243,1,0,0,0,185,1254,1,0,0,0,187,
	1260,1,0,0,0,189,1270,1,0,0,0,191,1274,1,0,0,0,193,1282,1,0,0,0,195,1289,
	1,0,0,0,197,1299,1,0,0,0,199,1304,1,0,0,0,201,1309,1,0,0,0,203,1318,1,0,
	0,0,205,1328,1,0,0,0,207,1335,1,0,0,0,209,1341,1,0,0,0,211,1347,1,0,0,0,
	213,1356,1,0,0,0,215,1363,1,0,0,0,217,1366,1,0,0,0,219,1373,1,0,0,0,221,
	1380,1,0,0,0,223,1383,1,0,0,0,225,1389,1,0,0,0,227,1397,1,0,0,0,229,1403,
	1,0,0,0,231,1410,1,0,0,0,233,1422,1,0,0,0,235,1429,1,0,0,0,237,1439,1,0,
	0,0,239,1448,1,0,0,0,241,1453,1,0,0,0,243,1456,1,0,0,0,245,1462,1,0,0,0,
	247,1467,1,0,0,0,249,1472,1,0,0,0,251,1477,1,0,0,0,253,1485,1,0,0,0,255,
	1490,1,0,0,0,257,1498,1,0,0,0,259,1503,1,0,0,0,261,1508,1,0,0,0,263,1514,
	1,0,0,0,265,1520,1,0,0,0,267,1525,1,0,0,0,269,1530,1,0,0,0,271,1536,1,0,
	0,0,273,1545,1,0,0,0,275,1550,1,0,0,0,277,1556,1,0,0,0,279,1564,1,0,0,0,
	281,1570,1,0,0,0,283,1574,1,0,0,0,285,1582,1,0,0,0,287,1588,1,0,0,0,289,
	1593,1,0,0,0,291,1603,1,0,0,0,293,1614,1,0,0,0,295,1622,1,0,0,0,297,1629,
	1,0,0,0,299,1631,1,0,0,0,301,1636,1,0,0,0,303,1642,1,0,0,0,305,1645,1,0,
	0,0,307,1648,1,0,0,0,309,1653,1,0,0,0,311,1660,1,0,0,0,313,1668,1,0,0,0,
	315,1671,1,0,0,0,317,1677,1,0,0,0,319,1681,1,0,0,0,321,1687,1,0,0,0,323,
	1700,1,0,0,0,325,1705,1,0,0,0,327,1714,1,0,0,0,329,1722,1,0,0,0,331,1732,
	1,0,0,0,333,1742,1,0,0,0,335,1754,1,0,0,0,337,1765,1,0,0,0,339,1773,1,0,
	0,0,341,1779,1,0,0,0,343,1787,1,0,0,0,345,1796,1,0,0,0,347,1806,1,0,0,0,
	349,1814,1,0,0,0,351,1825,1,0,0,0,353,1836,1,0,0,0,355,1842,1,0,0,0,357,
	1848,1,0,0,0,359,1854,1,0,0,0,361,1867,1,0,0,0,363,1880,1,0,0,0,365,1888,
	1,0,0,0,367,1895,1,0,0,0,369,1906,1,0,0,0,371,1914,1,0,0,0,373,1921,1,0,
	0,0,375,1928,1,0,0,0,377,1936,1,0,0,0,379,1942,1,0,0,0,381,1951,1,0,0,0,
	383,1958,1,0,0,0,385,1975,1,0,0,0,387,1977,1,0,0,0,389,1982,1,0,0,0,391,
	1988,1,0,0,0,393,1997,1,0,0,0,395,2004,1,0,0,0,397,2008,1,0,0,0,399,2013,
	1,0,0,0,401,2020,1,0,0,0,403,2027,1,0,0,0,405,2032,1,0,0,0,407,2042,1,0,
	0,0,409,2048,1,0,0,0,411,2064,1,0,0,0,413,2077,1,0,0,0,415,2081,1,0,0,0,
	417,2087,1,0,0,0,419,2092,1,0,0,0,421,2097,1,0,0,0,423,2104,1,0,0,0,425,
	2109,1,0,0,0,427,2114,1,0,0,0,429,2121,1,0,0,0,431,2127,1,0,0,0,433,2138,
	1,0,0,0,435,2145,1,0,0,0,437,2154,1,0,0,0,439,2161,1,0,0,0,441,2168,1,0,
	0,0,443,2178,1,0,0,0,445,2184,1,0,0,0,447,2191,1,0,0,0,449,2203,1,0,0,0,
	451,2230,1,0,0,0,453,2232,1,0,0,0,455,2243,1,0,0,0,457,2248,1,0,0,0,459,
	2253,1,0,0,0,461,2256,1,0,0,0,463,2262,1,0,0,0,465,2271,1,0,0,0,467,2283,
	1,0,0,0,469,2296,1,0,0,0,471,2306,1,0,0,0,473,2311,1,0,0,0,475,2316,1,0,
	0,0,477,2325,1,0,0,0,479,2330,1,0,0,0,481,2340,1,0,0,0,483,2350,1,0,0,0,
	485,2358,1,0,0,0,487,2364,1,0,0,0,489,2371,1,0,0,0,491,2379,1,0,0,0,493,
	2386,1,0,0,0,495,2392,1,0,0,0,497,2399,1,0,0,0,499,2403,1,0,0,0,501,2408,
	1,0,0,0,503,2414,1,0,0,0,505,2421,1,0,0,0,507,2426,1,0,0,0,509,2432,1,0,
	0,0,511,2437,1,0,0,0,513,2443,1,0,0,0,515,2450,1,0,0,0,517,2455,1,0,0,0,
	519,2463,1,0,0,0,521,2465,1,0,0,0,523,2469,1,0,0,0,525,2472,1,0,0,0,527,
	2475,1,0,0,0,529,2481,1,0,0,0,531,2483,1,0,0,0,533,2489,1,0,0,0,535,2491,
	1,0,0,0,537,2493,1,0,0,0,539,2495,1,0,0,0,541,2497,1,0,0,0,543,2499,1,0,
	0,0,545,2501,1,0,0,0,547,2503,1,0,0,0,549,2505,1,0,0,0,551,2507,1,0,0,0,
	553,2510,1,0,0,0,555,2512,1,0,0,0,557,2534,1,0,0,0,559,2537,1,0,0,0,561,
	2544,1,0,0,0,563,2551,1,0,0,0,565,2558,1,0,0,0,567,2573,1,0,0,0,569,2575,
	1,0,0,0,571,2595,1,0,0,0,573,2614,1,0,0,0,575,2636,1,0,0,0,577,2642,1,0,
	0,0,579,2646,1,0,0,0,581,2657,1,0,0,0,583,2681,1,0,0,0,585,2683,1,0,0,0,
	587,2692,1,0,0,0,589,2694,1,0,0,0,591,2696,1,0,0,0,593,2715,1,0,0,0,595,
	2732,1,0,0,0,597,2738,1,0,0,0,599,600,5,40,0,0,600,2,1,0,0,0,601,602,5,
	41,0,0,602,4,1,0,0,0,603,604,5,44,0,0,604,6,1,0,0,0,605,606,5,46,0,0,606,
	8,1,0,0,0,607,608,5,47,0,0,608,609,5,42,0,0,609,610,5,43,0,0,610,10,1,0,
	0,0,611,612,5,42,0,0,612,613,5,47,0,0,613,12,1,0,0,0,614,615,5,45,0,0,615,
	616,5,62,0,0,616,14,1,0,0,0,617,618,5,91,0,0,618,16,1,0,0,0,619,620,5,93,
	0,0,620,18,1,0,0,0,621,622,5,58,0,0,622,20,1,0,0,0,623,624,5,65,0,0,624,
	625,5,68,0,0,625,626,5,68,0,0,626,22,1,0,0,0,627,628,5,65,0,0,628,629,5,
	70,0,0,629,630,5,84,0,0,630,631,5,69,0,0,631,632,5,82,0,0,632,24,1,0,0,
	0,633,634,5,65,0,0,634,635,5,76,0,0,635,636,5,76,0,0,636,26,1,0,0,0,637,
	638,5,65,0,0,638,639,5,76,0,0,639,640,5,84,0,0,640,641,5,69,0,0,641,642,
	5,82,0,0,642,28,1,0,0,0,643,644,5,65,0,0,644,645,5,78,0,0,645,646,5,65,
	0,0,646,647,5,76,0,0,647,648,5,89,0,0,648,649,5,90,0,0,649,650,5,69,0,0,
	650,30,1,0,0,0,651,652,5,65,0,0,652,653,5,78,0,0,653,654,5,68,0,0,654,32,
	1,0,0,0,655,656,5,65,0,0,656,657,5,78,0,0,657,658,5,84,0,0,658,659,5,73,
	0,0,659,34,1,0,0,0,660,661,5,65,0,0,661,662,5,78,0,0,662,663,5,89,0,0,663,
	36,1,0,0,0,664,665,5,65,0,0,665,666,5,82,0,0,666,667,5,67,0,0,667,668,5,
	72,0,0,668,669,5,73,0,0,669,670,5,86,0,0,670,671,5,69,0,0,671,38,1,0,0,
	0,672,673,5,65,0,0,673,674,5,82,0,0,674,675,5,82,0,0,675,676,5,65,0,0,676,
	677,5,89,0,0,677,40,1,0,0,0,678,679,5,65,0,0,679,680,5,83,0,0,680,42,1,
	0,0,0,681,682,5,65,0,0,682,683,5,83,0,0,683,684,5,67,0,0,684,44,1,0,0,0,
	685,686,5,65,0,0,686,687,5,84,0,0,687,46,1,0,0,0,688,689,5,65,0,0,689,690,
	5,85,0,0,690,691,5,84,0,0,691,692,5,72,0,0,692,693,5,79,0,0,693,694,5,82,
	0,0,694,695,5,73,0,0,695,696,5,90,0,0,696,697,5,65,0,0,697,698,5,84,0,0,
	698,699,5,73,0,0,699,700,5,79,0,0,700,701,5,78,0,0,701,48,1,0,0,0,702,703,
	5,66,0,0,703,704,5,69,0,0,704,705,5,84,0,0,705,706,5,87,0,0,706,707,5,69,
	0,0,707,708,5,69,0,0,708,709,5,78,0,0,709,50,1,0,0,0,710,711,5,66,0,0,711,
	712,5,79,0,0,712,713,5,84,0,0,713,714,5,72,0,0,714,52,1,0,0,0,715,716,5,
	66,0,0,716,717,5,85,0,0,717,718,5,67,0,0,718,719,5,75,0,0,719,720,5,69,
	0,0,720,721,5,84,0,0,721,54,1,0,0,0,722,723,5,66,0,0,723,724,5,85,0,0,724,
	725,5,67,0,0,725,726,5,75,0,0,726,727,5,69,0,0,727,728,5,84,0,0,728,729,
	5,83,0,0,729,56,1,0,0,0,730,731,5,66,0,0,731,732,5,89,0,0,732,58,1,0,0,
	0,733,734,5,67,0,0,734,735,5,65,0,0,735,736,5,67,0,0,736,737,5,72,0,0,737,
	738,5,69,0,0,738,60,1,0,0,0,739,740,5,67,0,0,740,741,5,65,0,0,741,742,5,
	83,0,0,742,743,5,67,0,0,743,744,5,65,0,0,744,745,5,68,0,0,745,746,5,69,
	0,0,746,62,1,0,0,0,747,748,5,67,0,0,748,749,5,65,0,0,749,750,5,83,0,0,750,
	751,5,69,0,0,751,64,1,0,0,0,752,753,5,67,0,0,753,754,5,65,0,0,754,755,5,
	83,0,0,755,756,5,84,0,0,756,66,1,0,0,0,757,758,5,67,0,0,758,759,5,72,0,
	0,759,760,5,65,0,0,760,761,5,78,0,0,761,762,5,71,0,0,762,763,5,69,0,0,763,
	68,1,0,0,0,764,765,5,67,0,0,765,766,5,72,0,0,766,767,5,69,0,0,767,768,5,
	67,0,0,768,769,5,75,0,0,769,70,1,0,0,0,770,771,5,67,0,0,771,772,5,76,0,
	0,772,773,5,69,0,0,773,774,5,65,0,0,774,775,5,82,0,0,775,72,1,0,0,0,776,
	777,5,67,0,0,777,778,5,76,0,0,778,779,5,85,0,0,779,780,5,83,0,0,780,781,
	5,84,0,0,781,782,5,69,0,0,782,783,5,82,0,0,783,74,1,0,0,0,784,785,5,67,
	0,0,785,786,5,76,0,0,786,787,5,85,0,0,787,788,5,83,0,0,788,789,5,84,0,0,
	789,790,5,69,0,0,790,791,5,82,0,0,791,792,5,69,0,0,792,793,5,68,0,0,793,
	76,1,0,0,0,794,795,5,67,0,0,795,796,5,79,0,0,796,797,5,68,0,0,797,798,5,
	69,0,0,798,799,5,71,0,0,799,800,5,69,0,0,800,801,5,78,0,0,801,78,1,0,0,
	0,802,803,5,67,0,0,803,804,5,79,0,0,804,805,5,76,0,0,805,806,5,76,0,0,806,
	807,5,65,0,0,807,808,5,84,0,0,808,809,5,69,0,0,809,80,1,0,0,0,810,811,5,
	67,0,0,811,812,5,79,0,0,812,813,5,76,0,0,813,814,5,76,0,0,814,815,5,69,
	0,0,815,816,5,67,0,0,816,817,5,84,0,0,817,818,5,73,0,0,818,819,5,79,0,0,
	819,820,5,78,0,0,820,82,1,0,0,0,821,822,5,67,0,0,822,823,5,79,0,0,823,824,
	5,76,0,0,824,825,5,85,0,0,825,826,5,77,0,0,826,827,5,78,0,0,827,84,1,0,
	0,0,828,829,5,67,0,0,829,830,5,79,0,0,830,831,5,76,0,0,831,832,5,85,0,0,
	832,833,5,77,0,0,833,834,5,78,0,0,834,835,5,83,0,0,835,86,1,0,0,0,836,837,
	5,67,0,0,837,838,5,79,0,0,838,839,5,77,0,0,839,840,5,77,0,0,840,841,5,69,
	0,0,841,842,5,78,0,0,842,843,5,84,0,0,843,88,1,0,0,0,844,845,5,67,0,0,845,
	846,5,79,0,0,846,847,5,77,0,0,847,848,5,77,0,0,848,849,5,73,0,0,849,850,
	5,84,0,0,850,90,1,0,0,0,851,852,5,67,0,0,852,853,5,79,0,0,853,854,5,77,
	0,0,854,855,5,80,0,0,855,856,5,65,0,0,856,857,5,67,0,0,857,858,5,84,0,0,
	858,92,1,0,0,0,859,860,5,67,0,0,860,861,5,79,0,0,861,862,5,77,0,0,862,863,
	5,80,0,0,863,864,5,65,0,0,864,865,5,67,0,0,865,866,5,84,0,0,866,867,5,73,
	0,0,867,868,5,79,0,0,868,869,5,78,0,0,869,870,5,83,0,0,870,94,1,0,0,0,871,
	872,5,67,0,0,872,873,5,79,0,0,873,874,5,77,0,0,874,875,5,80,0,0,875,876,
	5,85,0,0,876,877,5,84,0,0,877,878,5,69,0,0,878,96,1,0,0,0,879,880,5,67,
	0,0,880,881,5,79,0,0,881,882,5,78,0,0,882,883,5,67,0,0,883,884,5,65,0,0,
	884,885,5,84,0,0,885,886,5,69,0,0,886,887,5,78,0,0,887,888,5,65,0,0,888,
	889,5,84,0,0,889,890,5,69,0,0,890,98,1,0,0,0,891,892,5,67,0,0,892,893,5,
	79,0,0,893,894,5,78,0,0,894,895,5,83,0,0,895,896,5,84,0,0,896,897,5,82,
	0,0,897,898,5,65,0,0,898,899,5,73,0,0,899,900,5,78,0,0,900,901,5,84,0,0,
	901,100,1,0,0,0,902,903,5,67,0,0,903,904,5,79,0,0,904,905,5,83,0,0,905,
	906,5,84,0,0,906,102,1,0,0,0,907,908,5,67,0,0,908,909,5,82,0,0,909,910,
	5,69,0,0,910,911,5,65,0,0,911,912,5,84,0,0,912,913,5,69,0,0,913,104,1,0,
	0,0,914,915,5,67,0,0,915,916,5,82,0,0,916,917,5,79,0,0,917,918,5,83,0,0,
	918,919,5,83,0,0,919,106,1,0,0,0,920,921,5,67,0,0,921,922,5,85,0,0,922,
	923,5,66,0,0,923,924,5,69,0,0,924,108,1,0,0,0,925,926,5,67,0,0,926,927,
	5,85,0,0,927,928,5,82,0,0,928,929,5,82,0,0,929,930,5,69,0,0,930,931,5,78,
	0,0,931,932,5,84,0,0,932,110,1,0,0,0,933,934,5,67,0,0,934,935,5,85,0,0,
	935,936,5,82,0,0,936,937,5,82,0,0,937,938,5,69,0,0,938,939,5,78,0,0,939,
	940,5,84,0,0,940,941,5,95,0,0,941,942,5,68,0,0,942,943,5,65,0,0,943,944,
	5,84,0,0,944,945,5,69,0,0,945,112,1,0,0,0,946,947,5,67,0,0,947,948,5,85,
	0,0,948,949,5,82,0,0,949,950,5,82,0,0,950,951,5,69,0,0,951,952,5,78,0,0,
	952,953,5,84,0,0,953,954,5,95,0,0,954,955,5,84,0,0,955,956,5,73,0,0,956,
	957,5,77,0,0,957,958,5,69,0,0,958,114,1,0,0,0,959,960,5,67,0,0,960,961,
	5,85,0,0,961,962,5,82,0,0,962,963,5,82,0,0,963,964,5,69,0,0,964,965,5,78,
	0,0,965,966,5,84,0,0,966,967,5,95,0,0,967,968,5,84,0,0,968,969,5,73,0,0,
	969,970,5,77,0,0,970,971,5,69,0,0,971,972,5,83,0,0,972,973,5,84,0,0,973,
	974,5,65,0,0,974,975,5,77,0,0,975,976,5,80,0,0,976,116,1,0,0,0,977,978,
	5,67,0,0,978,979,5,85,0,0,979,980,5,82,0,0,980,981,5,82,0,0,981,982,5,69,
	0,0,982,983,5,78,0,0,983,984,5,84,0,0,984,985,5,95,0,0,985,986,5,85,0,0,
	986,987,5,83,0,0,987,988,5,69,0,0,988,989,5,82,0,0,989,118,1,0,0,0,990,
	991,5,68,0,0,991,992,5,65,0,0,992,993,5,84,0,0,993,994,5,65,0,0,994,120,
	1,0,0,0,995,996,5,68,0,0,996,997,5,65,0,0,997,998,5,84,0,0,998,999,5,65,
	0,0,999,1000,5,66,0,0,1000,1001,5,65,0,0,1001,1002,5,83,0,0,1002,1003,5,
	69,0,0,1003,122,1,0,0,0,1004,1005,5,68,0,0,1005,1006,5,65,0,0,1006,1007,
	5,84,0,0,1007,1008,5,65,0,0,1008,1009,5,66,0,0,1009,1010,5,65,0,0,1010,
	1011,5,83,0,0,1011,1012,5,69,0,0,1012,1021,5,83,0,0,1013,1014,5,83,0,0,
	1014,1015,5,67,0,0,1015,1016,5,72,0,0,1016,1017,5,69,0,0,1017,1018,5,77,
	0,0,1018,1019,5,65,0,0,1019,1021,5,83,0,0,1020,1004,1,0,0,0,1020,1013,1,
	0,0,0,1021,124,1,0,0,0,1022,1023,5,68,0,0,1023,1024,5,66,0,0,1024,1025,
	5,80,0,0,1025,1026,5,82,0,0,1026,1027,5,79,0,0,1027,1028,5,80,0,0,1028,
	1029,5,69,0,0,1029,1030,5,82,0,0,1030,1031,5,84,0,0,1031,1032,5,73,0,0,
	1032,1033,5,69,0,0,1033,1034,5,83,0,0,1034,126,1,0,0,0,1035,1036,5,68,0,
	0,1036,1037,5,69,0,0,1037,1038,5,70,0,0,1038,1039,5,73,0,0,1039,1040,5,
	78,0,0,1040,1041,5,69,0,0,1041,1042,5,68,0,0,1042,128,1,0,0,0,1043,1044,
	5,68,0,0,1044,1045,5,69,0,0,1045,1046,5,76,0,0,1046,1047,5,69,0,0,1047,
	1048,5,84,0,0,1048,1049,5,69,0,0,1049,130,1,0,0,0,1050,1051,5,68,0,0,1051,
	1052,5,69,0,0,1052,1053,5,76,0,0,1053,1054,5,73,0,0,1054,1055,5,77,0,0,
	1055,1056,5,73,0,0,1056,1057,5,84,0,0,1057,1058,5,69,0,0,1058,1059,5,68,
	0,0,1059,132,1,0,0,0,1060,1061,5,68,0,0,1061,1062,5,69,0,0,1062,1063,5,
	83,0,0,1063,1064,5,67,0,0,1064,134,1,0,0,0,1065,1066,5,68,0,0,1066,1067,
	5,69,0,0,1067,1068,5,83,0,0,1068,1069,5,67,0,0,1069,1070,5,82,0,0,1070,
	1071,5,73,0,0,1071,1072,5,66,0,0,1072,1073,5,69,0,0,1073,136,1,0,0,0,1074,
	1075,5,68,0,0,1075,1076,5,70,0,0,1076,1077,5,83,0,0,1077,138,1,0,0,0,1078,
	1079,5,68,0,0,1079,1080,5,73,0,0,1080,1081,5,82,0,0,1081,1082,5,69,0,0,
	1082,1083,5,67,0,0,1083,1084,5,84,0,0,1084,1085,5,79,0,0,1085,1086,5,82,
	0,0,1086,1087,5,73,0,0,1087,1088,5,69,0,0,1088,1089,5,83,0,0,1089,140,1,
	0,0,0,1090,1091,5,68,0,0,1091,1092,5,73,0,0,1092,1093,5,82,0,0,1093,1094,
	5,69,0,0,1094,1095,5,67,0,0,1095,1096,5,84,0,0,1096,1097,5,79,0,0,1097,
	1098,5,82,0,0,1098,1099,5,89,0,0,1099,142,1,0,0,0,1100,1101,5,68,0,0,1101,
	1102,5,73,0,0,1102,1103,5,83,0,0,1103,1104,5,84,0,0,1104,1105,5,73,0,0,
	1105,1106,5,78,0,0,1106,1107,5,67,0,0,1107,1108,5,84,0,0,1108,144,1,0,0,
	0,1109,1110,5,68,0,0,1110,1111,5,73,0,0,1111,1112,5,83,0,0,1112,1113,5,
	84,0,0,1113,1114,5,82,0,0,1114,1115,5,73,0,0,1115,1116,5,66,0,0,1116,1117,
	5,85,0,0,1117,1118,5,84,0,0,1118,1119,5,69,0,0,1119,146,1,0,0,0,1120,1121,
	5,68,0,0,1121,1122,5,73,0,0,1122,1123,5,86,0,0,1123,148,1,0,0,0,1124,1125,
	5,68,0,0,1125,1126,5,82,0,0,1126,1127,5,79,0,0,1127,1128,5,80,0,0,1128,
	150,1,0,0,0,1129,1130,5,69,0,0,1130,1131,5,76,0,0,1131,1132,5,83,0,0,1132,
	1133,5,69,0,0,1133,152,1,0,0,0,1134,1135,5,69,0,0,1135,1136,5,78,0,0,1136,
	1137,5,68,0,0,1137,154,1,0,0,0,1138,1139,5,69,0,0,1139,1140,5,83,0,0,1140,
	1141,5,67,0,0,1141,1142,5,65,0,0,1142,1143,5,80,0,0,1143,1144,5,69,0,0,
	1144,156,1,0,0,0,1145,1146,5,69,0,0,1146,1147,5,83,0,0,1147,1148,5,67,0,
	0,1148,1149,5,65,0,0,1149,1150,5,80,0,0,1150,1151,5,69,0,0,1151,1152,5,
	68,0,0,1152,158,1,0,0,0,1153,1154,5,69,0,0,1154,1155,5,88,0,0,1155,1156,
	5,67,0,0,1156,1157,5,69,0,0,1157,1158,5,80,0,0,1158,1159,5,84,0,0,1159,
	160,1,0,0,0,1160,1161,5,69,0,0,1161,1162,5,88,0,0,1162,1163,5,67,0,0,1163,
	1164,5,72,0,0,1164,1165,5,65,0,0,1165,1166,5,78,0,0,1166,1167,5,71,0,0,
	1167,1168,5,69,0,0,1168,162,1,0,0,0,1169,1170,5,69,0,0,1170,1171,5,88,0,
	0,1171,1172,5,73,0,0,1172,1173,5,83,0,0,1173,1174,5,84,0,0,1174,1175,5,
	83,0,0,1175,164,1,0,0,0,1176,1177,5,69,0,0,1177,1178,5,88,0,0,1178,1179,
	5,80,0,0,1179,1180,5,76,0,0,1180,1181,5,65,0,0,1181,1182,5,73,0,0,1182,
	1183,5,78,0,0,1183,166,1,0,0,0,1184,1185,5,69,0,0,1185,1186,5,88,0,0,1186,
	1187,5,80,0,0,1187,1188,5,79,0,0,1188,1189,5,82,0,0,1189,1190,5,84,0,0,
	1190,168,1,0,0,0,1191,1192,5,69,0,0,1192,1193,5,88,0,0,1193,1194,5,84,0,
	0,1194,1195,5,69,0,0,1195,1196,5,78,0,0,1196,1197,5,68,0,0,1197,1198,5,
	69,0,0,1198,1199,5,68,0,0,1199,170,1,0,0,0,1200,1201,5,69,0,0,1201,1202,
	5,88,0,0,1202,1203,5,84,0,0,1203,1204,5,69,0,0,1204,1205,5,82,0,0,1205,
	1206,5,78,0,0,1206,1207,5,65,0,0,1207,1208,5,76,0,0,1208,172,1,0,0,0,1209,
	1210,5,69,0,0,1210,1211,5,88,0,0,1211,1212,5,84,0,0,1212,1213,5,82,0,0,
	1213,1214,5,65,0,0,1214,1215,5,67,0,0,1215,1216,5,84,0,0,1216,174,1,0,0,
	0,1217,1218,5,70,0,0,1218,1219,5,65,0,0,1219,1220,5,76,0,0,1220,1221,5,
	83,0,0,1221,1222,5,69,0,0,1222,176,1,0,0,0,1223,1224,5,70,0,0,1224,1225,
	5,69,0,0,1225,1226,5,84,0,0,1226,1227,5,67,0,0,1227,1228,5,72,0,0,1228,
	178,1,0,0,0,1229,1230,5,70,0,0,1230,1231,5,73,0,0,1231,1232,5,69,0,0,1232,
	1233,5,76,0,0,1233,1234,5,68,0,0,1234,1235,5,83,0,0,1235,180,1,0,0,0,1236,
	1237,5,70,0,0,1237,1238,5,73,0,0,1238,1239,5,76,0,0,1239,1240,5,84,0,0,
	1240,1241,5,69,0,0,1241,1242,5,82,0,0,1242,182,1,0,0,0,1243,1244,5,70,0,
	0,1244,1245,5,73,0,0,1245,1246,5,76,0,0,1246,1247,5,69,0,0,1247,1248,5,
	70,0,0,1248,1249,5,79,0,0,1249,1250,5,82,0,0,1250,1251,5,77,0,0,1251,1252,
	5,65,0,0,1252,1253,5,84,0,0,1253,184,1,0,0,0,1254,1255,5,70,0,0,1255,1256,
	5,73,0,0,1256,1257,5,82,0,0,1257,1258,5,83,0,0,1258,1259,5,84,0,0,1259,
	186,1,0,0,0,1260,1261,5,70,0,0,1261,1262,5,79,0,0,1262,1263,5,76,0,0,1263,
	1264,5,76,0,0,1264,1265,5,79,0,0,1265,1266,5,87,0,0,1266,1267,5,73,0,0,
	1267,1268,5,78,0,0,1268,1269,5,71,0,0,1269,188,1,0,0,0,1270,1271,5,70,0,
	0,1271,1272,5,79,0,0,1272,1273,5,82,0,0,1273,190,1,0,0,0,1274,1275,5,70,
	0,0,1275,1276,5,79,0,0,1276,1277,5,82,0,0,1277,1278,5,69,0,0,1278,1279,
	5,73,0,0,1279,1280,5,71,0,0,1280,1281,5,78,0,0,1281,192,1,0,0,0,1282,1283,
	5,70,0,0,1283,1284,5,79,0,0,1284,1285,5,82,0,0,1285,1286,5,77,0,0,1286,
	1287,5,65,0,0,1287,1288,5,84,0,0,1288,194,1,0,0,0,1289,1290,5,70,0,0,1290,
	1291,5,79,0,0,1291,1292,5,82,0,0,1292,1293,5,77,0,0,1293,1294,5,65,0,0,
	1294,1295,5,84,0,0,1295,1296,5,84,0,0,1296,1297,5,69,0,0,1297,1298,5,68,
	0,0,1298,196,1,0,0,0,1299,1300,5,70,0,0,1300,1301,5,82,0,0,1301,1302,5,
	79,0,0,1302,1303,5,77,0,0,1303,198,1,0,0,0,1304,1305,5,70,0,0,1305,1306,
	5,85,0,0,1306,1307,5,76,0,0,1307,1308,5,76,0,0,1308,200,1,0,0,0,1309,1310,
	5,70,0,0,1310,1311,5,85,0,0,1311,1312,5,78,0,0,1312,1313,5,67,0,0,1313,
	1314,5,84,0,0,1314,1315,5,73,0,0,1315,1316,5,79,0,0,1316,1317,5,78,0,0,
	1317,202,1,0,0,0,1318,1319,5,70,0,0,1319,1320,5,85,0,0,1320,1321,5,78,0,
	0,1321,1322,5,67,0,0,1322,1323,5,84,0,0,1323,1324,5,73,0,0,1324,1325,5,
	79,0,0,1325,1326,5,78,0,0,1326,1327,5,83,0,0,1327,204,1,0,0,0,1328,1329,
	5,71,0,0,1329,1330,5,76,0,0,1330,1331,5,79,0,0,1331,1332,5,66,0,0,1332,
	1333,5,65,0,0,1333,1334,5,76,0,0,1334,206,1,0,0,0,1335,1336,5,71,0,0,1336,
	1337,5,82,0,0,1337,1338,5,65,0,0,1338,1339,5,78,0,0,1339,1340,5,84,0,0,
	1340,208,1,0,0,0,1341,1342,5,71,0,0,1342,1343,5,82,0,0,1343,1344,5,79,0,
	0,1344,1345,5,85,0,0,1345,1346,5,80,0,0,1346,210,1,0,0,0,1347,1348,5,71,
	0,0,1348,1349,5,82,0,0,1349,1350,5,79,0,0,1350,1351,5,85,0,0,1351,1352,
	5,80,0,0,1352,1353,5,73,0,0,1353,1354,5,78,0,0,1354,1355,5,71,0,0,1355,
	212,1,0,0,0,1356,1357,5,72,0,0,1357,1358,5,65,0,0,1358,1359,5,86,0,0,1359,
	1360,5,73,0,0,1360,1361,5,78,0,0,1361,1362,5,71,0,0,1362,214,1,0,0,0,1363,
	1364,5,73,0,0,1364,1365,5,70,0,0,1365,216,1,0,0,0,1366,1367,5,73,0,0,1367,
	1368,5,71,0,0,1368,1369,5,78,0,0,1369,1370,5,79,0,0,1370,1371,5,82,0,0,
	1371,1372,5,69,0,0,1372,218,1,0,0,0,1373,1374,5,73,0,0,1374,1375,5,77,0,
	0,1375,1376,5,80,0,0,1376,1377,5,79,0,0,1377,1378,5,82,0,0,1378,1379,5,
	84,0,0,1379,220,1,0,0,0,1380,1381,5,73,0,0,1381,1382,5,78,0,0,1382,222,
	1,0,0,0,1383,1384,5,73,0,0,1384,1385,5,78,0,0,1385,1386,5,68,0,0,1386,1387,
	5,69,0,0,1387,1388,5,88,0,0,1388,224,1,0,0,0,1389,1390,5,73,0,0,1390,1391,
	5,78,0,0,1391,1392,5,68,0,0,1392,1393,5,69,0,0,1393,1394,5,88,0,0,1394,
	1395,5,69,0,0,1395,1396,5,83,0,0,1396,226,1,0,0,0,1397,1398,5,73,0,0,1398,
	1399,5,78,0,0,1399,1400,5,78,0,0,1400,1401,5,69,0,0,1401,1402,5,82,0,0,
	1402,228,1,0,0,0,1403,1404,5,73,0,0,1404,1405,5,78,0,0,1405,1406,5,80,0,
	0,1406,1407,5,65,0,0,1407,1408,5,84,0,0,1408,1409,5,72,0,0,1409,230,1,0,
	0,0,1410,1411,5,73,0,0,1411,1412,5,78,0,0,1412,1413,5,80,0,0,1413,1414,
	5,85,0,0,1414,1415,5,84,0,0,1415,1416,5,70,0,0,1416,1417,5,79,0,0,1417,
	1418,5,82,0,0,1418,1419,5,77,0,0,1419,1420,5,65,0,0,1420,1421,5,84,0,0,
	1421,232,1,0,0,0,1422,1423,5,73,0,0,1423,1424,5,78,0,0,1424,1425,5,83,0,
	0,1425,1426,5,69,0,0,1426,1427,5,82,0,0,1427,1428,5,84,0,0,1428,234,1,0,
	0,0,1429,1430,5,73,0,0,1430,1431,5,78,0,0,1431,1432,5,84,0,0,1432,1433,
	5,69,0,0,1433,1434,5,82,0,0,1434,1435,5,83,0,0,1435,1436,5,69,0,0,1436,
	1437,5,67,0,0,1437,1438,5,84,0,0,1438,236,1,0,0,0,1439,1440,5,73,0,0,1440,
	1441,5,78,0,0,1441,1442,5,84,0,0,1442,1443,5,69,0,0,1443,1444,5,82,0,0,
	1444,1445,5,86,0,0,1445,1446,5,65,0,0,1446,1447,5,76,0,0,1447,238,1,0,0,
	0,1448,1449,5,73,0,0,1449,1450,5,78,0,0,1450,1451,5,84,0,0,1451,1452,5,
	79,0,0,1452,240,1,0,0,0,1453,1454,5,73,0,0,1454,1455,5,83,0,0,1455,242,
	1,0,0,0,1456,1457,5,73,0,0,1457,1458,5,84,0,0,1458,1459,5,69,0,0,1459,1460,
	5,77,0,0,1460,1461,5,83,0,0,1461,244,1,0,0,0,1462,1463,5,74,0,0,1463,1464,
	5,79,0,0,1464,1465,5,73,0,0,1465,1466,5,78,0,0,1466,246,1,0,0,0,1467,1468,
	5,75,0,0,1468,1469,5,69,0,0,1469,1470,5,89,0,0,1470,1471,5,83,0,0,1471,
	248,1,0,0,0,1472,1473,5,76,0,0,1473,1474,5,65,0,0,1474,1475,5,83,0,0,1475,
	1476,5,84,0,0,1476,250,1,0,0,0,1477,1478,5,76,0,0,1478,1479,5,65,0,0,1479,
	1480,5,84,0,0,1480,1481,5,69,0,0,1481,1482,5,82,0,0,1482,1483,5,65,0,0,
	1483,1484,5,76,0,0,1484,252,1,0,0,0,1485,1486,5,76,0,0,1486,1487,5,65,0,
	0,1487,1488,5,90,0,0,1488,1489,5,89,0,0,1489,254,1,0,0,0,1490,1491,5,76,
	0,0,1491,1492,5,69,0,0,1492,1493,5,65,0,0,1493,1494,5,68,0,0,1494,1495,
	5,73,0,0,1495,1496,5,78,0,0,1496,1497,5,71,0,0,1497,256,1,0,0,0,1498,1499,
	5,76,0,0,1499,1500,5,69,0,0,1500,1501,5,70,0,0,1501,1502,5,84,0,0,1502,
	258,1,0,0,0,1503,1504,5,76,0,0,1504,1505,5,73,0,0,1505,1506,5,75,0,0,1506,
	1507,5,69,0,0,1507,260,1,0,0,0,1508,1509,5,76,0,0,1509,1510,5,73,0,0,1510,
	1511,5,77,0,0,1511,1512,5,73,0,0,1512,1513,5,84,0,0,1513,262,1,0,0,0,1514,
	1515,5,76,0,0,1515,1516,5,73,0,0,1516,1517,5,78,0,0,1517,1518,5,69,0,0,
	1518,1519,5,83,0,0,1519,264,1,0,0,0,1520,1521,5,76,0,0,1521,1522,5,73,0,
	0,1522,1523,5,83,0,0,1523,1524,5,84,0,0,1524,266,1,0,0,0,1525,1526,5,76,
	0,0,1526,1527,5,79,0,0,1527,1528,5,65,0,0,1528,1529,5,68,0,0,1529,268,1,
	0,0,0,1530,1531,5,76,0,0,1531,1532,5,79,0,0,1532,1533,5,67,0,0,1533,1534,
	5,65,0,0,1534,1535,5,76,0,0,1535,270,1,0,0,0,1536,1537,5,76,0,0,1537,1538,
	5,79,0,0,1538,1539,5,67,0,0,1539,1540,5,65,0,0,1540,1541,5,84,0,0,1541,
	1542,5,73,0,0,1542,1543,5,79,0,0,1543,1544,5,78,0,0,1544,272,1,0,0,0,1545,
	1546,5,76,0,0,1546,1547,5,79,0,0,1547,1548,5,67,0,0,1548,1549,5,75,0,0,
	1549,274,1,0,0,0,1550,1551,5,76,0,0,1551,1552,5,79,0,0,1552,1553,5,67,0,
	0,1553,1554,5,75,0,0,1554,1555,5,83,0,0,1555,276,1,0,0,0,1556,1557,5,76,
	0,0,1557,1558,5,79,0,0,1558,1559,5,71,0,0,1559,1560,5,73,0,0,1560,1561,
	5,67,0,0,1561,1562,5,65,0,0,1562,1563,5,76,0,0,1563,278,1,0,0,0,1564,1565,
	5,77,0,0,1565,1566,5,65,0,0,1566,1567,5,67,0,0,1567,1568,5,82,0,0,1568,
	1569,5,79,0,0,1569,280,1,0,0,0,1570,1571,5,77,0,0,1571,1572,5,65,0,0,1572,
	1573,5,80,0,0,1573,282,1,0,0,0,1574,1575,5,77,0,0,1575,1576,5,65,0,0,1576,
	1577,5,84,0,0,1577,1578,5,67,0,0,1578,1579,5,72,0,0,1579,1580,5,69,0,0,
	1580,1581,5,68,0,0,1581,284,1,0,0,0,1582,1583,5,77,0,0,1583,1584,5,69,0,
	0,1584,1585,5,82,0,0,1585,1586,5,71,0,0,1586,1587,5,69,0,0,1587,286,1,0,
	0,0,1588,1589,5,77,0,0,1589,1590,5,83,0,0,1590,1591,5,67,0,0,1591,1592,
	5,75,0,0,1592,288,1,0,0,0,1593,1594,5,78,0,0,1594,1595,5,65,0,0,1595,1596,
	5,77,0,0,1596,1597,5,69,0,0,1597,1598,5,83,0,0,1598,1599,5,80,0,0,1599,
	1600,5,65,0,0,1600,1601,5,67,0,0,1601,1602,5,69,0,0,1602,290,1,0,0,0,1603,
	1604,5,78,0,0,1604,1605,5,65,0,0,1605,1606,5,77,0,0,1606,1607,5,69,0,0,
	1607,1608,5,83,0,0,1608,1609,5,80,0,0,1609,1610,5,65,0,0,1610,1611,5,67,
	0,0,1611,1612,5,69,0,0,1612,1613,5,83,0,0,1613,292,1,0,0,0,1614,1615,5,
	78,0,0,1615,1616,5,65,0,0,1616,1617,5,84,0,0,1617,1618,5,85,0,0,1618,1619,
	5,82,0,0,1619,1620,5,65,0,0,1620,1621,5,76,0,0,1621,294,1,0,0,0,1622,1623,
	5,78,0,0,1623,1624,5,79,0,0,1624,296,1,0,0,0,1625,1626,5,78,0,0,1626,1627,
	5,79,0,0,1627,1630,5,84,0,0,1628,1630,5,33,0,0,1629,1625,1,0,0,0,1629,1628,
	1,0,0,0,1630,298,1,0,0,0,1631,1632,5,78,0,0,1632,1633,5,85,0,0,1633,1634,
	5,76,0,0,1634,1635,5,76,0,0,1635,300,1,0,0,0,1636,1637,5,78,0,0,1637,1638,
	5,85,0,0,1638,1639,5,76,0,0,1639,1640,5,76,0,0,1640,1641,5,83,0,0,1641,
	302,1,0,0,0,1642,1643,5,79,0,0,1643,1644,5,70,0,0,1644,304,1,0,0,0,1645,
	1646,5,79,0,0,1646,1647,5,78,0,0,1647,306,1,0,0,0,1648,1649,5,79,0,0,1649,
	1650,5,78,0,0,1650,1651,5,76,0,0,1651,1652,5,89,0,0,1652,308,1,0,0,0,1653,
	1654,5,79,0,0,1654,1655,5,80,0,0,1655,1656,5,84,0,0,1656,1657,5,73,0,0,
	1657,1658,5,79,0,0,1658,1659,5,78,0,0,1659,310,1,0,0,0,1660,1661,5,79,0,
	0,1661,1662,5,80,0,0,1662,1663,5,84,0,0,1663,1664,5,73,0,0,1664,1665,5,
	79,0,0,1665,1666,5,78,0,0,1666,1667,5,83,0,0,1667,312,1,0,0,0,1668,1669,
	5,79,0,0,1669,1670,5,82,0,0,1670,314,1,0,0,0,1671,1672,5,79,0,0,1672,1673,
	5,82,0,0,1673,1674,5,68,0,0,1674,1675,5,69,0,0,1675,1676,5,82,0,0,1676,
	316,1,0,0,0,1677,1678,5,79,0,0,1678,1679,5,85,0,0,1679,1680,5,84,0,0,1680,
	318,1,0,0,0,1681,1682,5,79,0,0,1682,1683,5,85,0,0,1683,1684,5,84,0,0,1684,
	1685,5,69,0,0,1685,1686,5,82,0,0,1686,320,1,0,0,0,1687,1688,5,79,0,0,1688,
	1689,5,85,0,0,1689,1690,5,84,0,0,1690,1691,5,80,0,0,1691,1692,5,85,0,0,
	1692,1693,5,84,0,0,1693,1694,5,70,0,0,1694,1695,5,79,0,0,1695,1696,5,82,
	0,0,1696,1697,5,77,0,0,1697,1698,5,65,0,0,1698,1699,5,84,0,0,1699,322,1,
	0,0,0,1700,1701,5,79,0,0,1701,1702,5,86,0,0,1702,1703,5,69,0,0,1703,1704,
	5,82,0,0,1704,324,1,0,0,0,1705,1706,5,79,0,0,1706,1707,5,86,0,0,1707,1708,
	5,69,0,0,1708,1709,5,82,0,0,1709,1710,5,76,0,0,1710,1711,5,65,0,0,1711,
	1712,5,80,0,0,1712,1713,5,83,0,0,1713,326,1,0,0,0,1714,1715,5,79,0,0,1715,
	1716,5,86,0,0,1716,1717,5,69,0,0,1717,1718,5,82,0,0,1718,1719,5,76,0,0,
	1719,1720,5,65,0,0,1720,1721,5,89,0,0,1721,328,1,0,0,0,1722,1723,5,79,0,
	0,1723,1724,5,86,0,0,1724,1725,5,69,0,0,1725,1726,5,82,0,0,1726,1727,5,
	87,0,0,1727,1728,5,82,0,0,1728,1729,5,73,0,0,1729,1730,5,84,0,0,1730,1731,
	5,69,0,0,1731,330,1,0,0,0,1732,1733,5,80,0,0,1733,1734,5,65,0,0,1734,1735,
	5,82,0,0,1735,1736,5,84,0,0,1736,1737,5,73,0,0,1737,1738,5,84,0,0,1738,
	1739,5,73,0,0,1739,1740,5,79,0,0,1740,1741,5,78,0,0,1741,332,1,0,0,0,1742,
	1743,5,80,0,0,1743,1744,5,65,0,0,1744,1745,5,82,0,0,1745,1746,5,84,0,0,
	1746,1747,5,73,0,0,1747,1748,5,84,0,0,1748,1749,5,73,0,0,1749,1750,5,79,
	0,0,1750,1751,5,78,0,0,1751,1752,5,69,0,0,1752,1753,5,68,0,0,1753,334,1,
	0,0,0,1754,1755,5,80,0,0,1755,1756,5,65,0,0,1756,1757,5,82,0,0,1757,1758,
	5,84,0,0,1758,1759,5,73,0,0,1759,1760,5,84,0,0,1760,1761,5,73,0,0,1761,
	1762,5,79,0,0,1762,1763,5,78,0,0,1763,1764,5,83,0,0,1764,336,1,0,0,0,1765,
	1766,5,80,0,0,1766,1767,5,69,0,0,1767,1768,5,82,0,0,1768,1769,5,67,0,0,
	1769,1770,5,69,0,0,1770,1771,5,78,0,0,1771,1772,5,84,0,0,1772,338,1,0,0,
	0,1773,1774,5,80,0,0,1774,1775,5,73,0,0,1775,1776,5,86,0,0,1776,1777,5,
	79,0,0,1777,1778,5,84,0,0,1778,340,1,0,0,0,1779,1780,5,80,0,0,1780,1781,
	5,76,0,0,1781,1782,5,65,0,0,1782,1783,5,67,0,0,1783,1784,5,73,0,0,1784,
	1785,5,78,0,0,1785,1786,5,71,0,0,1786,342,1,0,0,0,1787,1788,5,80,0,0,1788,
	1789,5,79,0,0,1789,1790,5,83,0,0,1790,1791,5,73,0,0,1791,1792,5,84,0,0,
	1792,1793,5,73,0,0,1793,1794,5,79,0,0,1794,1795,5,78,0,0,1795,344,1,0,0,
	0,1796,1797,5,80,0,0,1797,1798,5,82,0,0,1798,1799,5,69,0,0,1799,1800,5,
	67,0,0,1800,1801,5,69,0,0,1801,1802,5,68,0,0,1802,1803,5,73,0,0,1803,1804,
	5,78,0,0,1804,1805,5,71,0,0,1805,346,1,0,0,0,1806,1807,5,80,0,0,1807,1808,
	5,82,0,0,1808,1809,5,73,0,0,1809,1810,5,77,0,0,1810,1811,5,65,0,0,1811,
	1812,5,82,0,0,1812,1813,5,89,0,0,1813,348,1,0,0,0,1814,1815,5,80,0,0,1815,
	1816,5,82,0,0,1816,1817,5,73,0,0,1817,1818,5,78,0,0,1818,1819,5,67,0,0,
	1819,1820,5,73,0,0,1820,1821,5,80,0,0,1821,1822,5,65,0,0,1822,1823,5,76,
	0,0,1823,1824,5,83,0,0,1824,350,1,0,0,0,1825,1826,5,80,0,0,1826,1827,5,
	82,0,0,1827,1828,5,79,0,0,1828,1829,5,80,0,0,1829,1830,5,69,0,0,1830,1831,
	5,82,0,0,1831,1832,5,84,0,0,1832,1833,5,73,0,0,1833,1834,5,69,0,0,1834,
	1835,5,83,0,0,1835,352,1,0,0,0,1836,1837,5,80,0,0,1837,1838,5,85,0,0,1838,
	1839,5,82,0,0,1839,1840,5,71,0,0,1840,1841,5,69,0,0,1841,354,1,0,0,0,1842,
	1843,5,81,0,0,1843,1844,5,85,0,0,1844,1845,5,69,0,0,1845,1846,5,82,0,0,
	1846,1847,5,89,0,0,1847,356,1,0,0,0,1848,1849,5,82,0,0,1849,1850,5,65,0,
	0,1850,1851,5,78,0,0,1851,1852,5,71,0,0,1852,1853,5,69,0,0,1853,358,1,0,
	0,0,1854,1855,5,82,0,0,1855,1856,5,69,0,0,1856,1857,5,67,0,0,1857,1858,
	5,79,0,0,1858,1859,5,82,0,0,1859,1860,5,68,0,0,1860,1861,5,82,0,0,1861,
	1862,5,69,0,0,1862,1863,5,65,0,0,1863,1864,5,68,0,0,1864,1865,5,69,0,0,
	1865,1866,5,82,0,0,1866,360,1,0,0,0,1867,1868,5,82,0,0,1868,1869,5,69,0,
	0,1869,1870,5,67,0,0,1870,1871,5,79,0,0,1871,1872,5,82,0,0,1872,1873,5,
	68,0,0,1873,1874,5,87,0,0,1874,1875,5,82,0,0,1875,1876,5,73,0,0,1876,1877,
	5,84,0,0,1877,1878,5,69,0,0,1878,1879,5,82,0,0,1879,362,1,0,0,0,1880,1881,
	5,82,0,0,1881,1882,5,69,0,0,1882,1883,5,67,0,0,1883,1884,5,79,0,0,1884,
	1885,5,86,0,0,1885,1886,5,69,0,0,1886,1887,5,82,0,0,1887,364,1,0,0,0,1888,
	1889,5,82,0,0,1889,1890,5,69,0,0,1890,1891,5,68,0,0,1891,1892,5,85,0,0,
	1892,1893,5,67,0,0,1893,1894,5,69,0,0,1894,366,1,0,0,0,1895,1896,5,82,0,
	0,1896,1897,5,69,0,0,1897,1898,5,70,0,0,1898,1899,5,69,0,0,1899,1900,5,
	82,0,0,1900,1901,5,69,0,0,1901,1902,5,78,0,0,1902,1903,5,67,0,0,1903,1904,
	5,69,0,0,1904,1905,5,83,0,0,1905,368,1,0,0,0,1906,1907,5,82,0,0,1907,1908,
	5,69,0,0,1908,1909,5,70,0,0,1909,1910,5,82,0,0,1910,1911,5,69,0,0,1911,
	1912,5,83,0,0,1912,1913,5,72,0,0,1913,370,1,0,0,0,1914,1915,5,82,0,0,1915,
	1916,5,69,0,0,1916,1917,5,78,0,0,1917,1918,5,65,0,0,1918,1919,5,77,0,0,
	1919,1920,5,69,0,0,1920,372,1,0,0,0,1921,1922,5,82,0,0,1922,1923,5,69,0,
	0,1923,1924,5,80,0,0,1924,1925,5,65,0,0,1925,1926,5,73,0,0,1926,1927,5,
	82,0,0,1927,374,1,0,0,0,1928,1929,5,82,0,0,1929,1930,5,69,0,0,1930,1931,
	5,80,0,0,1931,1932,5,76,0,0,1932,1933,5,65,0,0,1933,1934,5,67,0,0,1934,
	1935,5,69,0,0,1935,376,1,0,0,0,1936,1937,5,82,0,0,1937,1938,5,69,0,0,1938,
	1939,5,83,0,0,1939,1940,5,69,0,0,1940,1941,5,84,0,0,1941,378,1,0,0,0,1942,
	1943,5,82,0,0,1943,1944,5,69,0,0,1944,1945,5,83,0,0,1945,1946,5,84,0,0,
	1946,1947,5,82,0,0,1947,1948,5,73,0,0,1948,1949,5,67,0,0,1949,1950,5,84,
	0,0,1950,380,1,0,0,0,1951,1952,5,82,0,0,1952,1953,5,69,0,0,1953,1954,5,
	86,0,0,1954,1955,5,79,0,0,1955,1956,5,75,0,0,1956,1957,5,69,0,0,1957,382,
	1,0,0,0,1958,1959,5,82,0,0,1959,1960,5,73,0,0,1960,1961,5,71,0,0,1961,1962,
	5,72,0,0,1962,1963,5,84,0,0,1963,384,1,0,0,0,1964,1965,5,82,0,0,1965,1966,
	5,76,0,0,1966,1967,5,73,0,0,1967,1968,5,75,0,0,1968,1976,5,69,0,0,1969,
	1970,5,82,0,0,1970,1971,5,69,0,0,1971,1972,5,71,0,0,1972,1973,5,69,0,0,
	1973,1974,5,88,0,0,1974,1976,5,80,0,0,1975,1964,1,0,0,0,1975,1969,1,0,0,
	0,1976,386,1,0,0,0,1977,1978,5,82,0,0,1978,1979,5,79,0,0,1979,1980,5,76,
	0,0,1980,1981,5,69,0,0,1981,388,1,0,0,0,1982,1983,5,82,0,0,1983,1984,5,
	79,0,0,1984,1985,5,76,0,0,1985,1986,5,69,0,0,1986,1987,5,83,0,0,1987,390,
	1,0,0,0,1988,1989,5,82,0,0,1989,1990,5,79,0,0,1990,1991,5,76,0,0,1991,1992,
	5,76,0,0,1992,1993,5,66,0,0,1993,1994,5,65,0,0,1994,1995,5,67,0,0,1995,
	1996,5,75,0,0,1996,392,1,0,0,0,1997,1998,5,82,0,0,1998,1999,5,79,0,0,1999,
	2000,5,76,0,0,2000,2001,5,76,0,0,2001,2002,5,85,0,0,2002,2003,5,80,0,0,
	2003,394,1,0,0,0,2004,2005,5,82,0,0,2005,2006,5,79,0,0,2006,2007,5,87,0,
	0,2007,396,1,0,0,0,2008,2009,5,82,0,0,2009,2010,5,79,0,0,2010,2011,5,87,
	0,0,2011,2012,5,83,0,0,2012,398,1,0,0,0,2013,2014,5,83,0,0,2014,2015,5,
	67,0,0,2015,2016,5,72,0,0,2016,2017,5,69,0,0,2017,2018,5,77,0,0,2018,2019,
	5,65,0,0,2019,400,1,0,0,0,2020,2021,5,83,0,0,2021,2022,5,69,0,0,2022,2023,
	5,76,0,0,2023,2024,5,69,0,0,2024,2025,5,67,0,0,2025,2026,5,84,0,0,2026,
	402,1,0,0,0,2027,2028,5,83,0,0,2028,2029,5,69,0,0,2029,2030,5,77,0,0,2030,
	2031,5,73,0,0,2031,404,1,0,0,0,2032,2033,5,83,0,0,2033,2034,5,69,0,0,2034,
	2035,5,80,0,0,2035,2036,5,65,0,0,2036,2037,5,82,0,0,2037,2038,5,65,0,0,
	2038,2039,5,84,0,0,2039,2040,5,69,0,0,2040,2041,5,68,0,0,2041,406,1,0,0,
	0,2042,2043,5,83,0,0,2043,2044,5,69,0,0,2044,2045,5,82,0,0,2045,2046,5,
	68,0,0,2046,2047,5,69,0,0,2047,408,1,0,0,0,2048,2049,5,83,0,0,2049,2050,
	5,69,0,0,2050,2051,5,82,0,0,2051,2052,5,68,0,0,2052,2053,5,69,0,0,2053,
	2054,5,80,0,0,2054,2055,5,82,0,0,2055,2056,5,79,0,0,2056,2057,5,80,0,0,
	2057,2058,5,69,0,0,2058,2059,5,82,0,0,2059,2060,5,84,0,0,2060,2061,5,73,
	0,0,2061,2062,5,69,0,0,2062,2063,5,83,0,0,2063,410,1,0,0,0,2064,2065,5,
	83,0,0,2065,2066,5,69,0,0,2066,2067,5,83,0,0,2067,2068,5,83,0,0,2068,2069,
	5,73,0,0,2069,2070,5,79,0,0,2070,2071,5,78,0,0,2071,2072,5,95,0,0,2072,
	2073,5,85,0,0,2073,2074,5,83,0,0,2074,2075,5,69,0,0,2075,2076,5,82,0,0,
	2076,412,1,0,0,0,2077,2078,5,83,0,0,2078,2079,5,69,0,0,2079,2080,5,84,0,
	0,2080,414,1,0,0,0,2081,2082,5,77,0,0,2082,2083,5,73,0,0,2083,2084,5,78,
	0,0,2084,2085,5,85,0,0,2085,2086,5,83,0,0,2086,416,1,0,0,0,2087,2088,5,
	83,0,0,2088,2089,5,69,0,0,2089,2090,5,84,0,0,2090,2091,5,83,0,0,2091,418,
	1,0,0,0,2092,2093,5,83,0,0,2093,2094,5,72,0,0,2094,2095,5,79,0,0,2095,2096,
	5,87,0,0,2096,420,1,0,0,0,2097,2098,5,83,0,0,2098,2099,5,75,0,0,2099,2100,
	5,69,0,0,2100,2101,5,87,0,0,2101,2102,5,69,0,0,2102,2103,5,68,0,0,2103,
	422,1,0,0,0,2104,2105,5,83,0,0,2105,2106,5,79,0,0,2106,2107,5,77,0,0,2107,
	2108,5,69,0,0,2108,424,1,0,0,0,2109,2110,5,83,0,0,2110,2111,5,79,0,0,2111,
	2112,5,82,0,0,2112,2113,5,84,0,0,2113,426,1,0,0,0,2114,2115,5,83,0,0,2115,
	2116,5,79,0,0,2116,2117,5,82,0,0,2117,2118,5,84,0,0,2118,2119,5,69,0,0,
	2119,2120,5,68,0,0,2120,428,1,0,0,0,2121,2122,5,83,0,0,2122,2123,5,84,0,
	0,2123,2124,5,65,0,0,2124,2125,5,82,0,0,2125,2126,5,84,0,0,2126,430,1,0,
	0,0,2127,2128,5,83,0,0,2128,2129,5,84,0,0,2129,2130,5,65,0,0,2130,2131,
	5,84,0,0,2131,2132,5,73,0,0,2132,2133,5,83,0,0,2133,2134,5,84,0,0,2134,
	2135,5,73,0,0,2135,2136,5,67,0,0,2136,2137,5,83,0,0,2137,432,1,0,0,0,2138,
	2139,5,83,0,0,2139,2140,5,84,0,0,2140,2141,5,79,0,0,2141,2142,5,82,0,0,
	2142,2143,5,69,0,0,2143,2144,5,68,0,0,2144,434,1,0,0,0,2145,2146,5,83,0,
	0,2146,2147,5,84,0,0,2147,2148,5,82,0,0,2148,2149,5,65,0,0,2149,2150,5,
	84,0,0,2150,2151,5,73,0,0,2151,2152,5,70,0,0,2152,2153,5,89,0,0,2153,436,
	1,0,0,0,2154,2155,5,83,0,0,2155,2156,5,84,0,0,2156,2157,5,82,0,0,2157,2158,
	5,85,0,0,2158,2159,5,67,0,0,2159,2160,5,84,0,0,2160,438,1,0,0,0,2161,2162,
	5,83,0,0,2162,2163,5,85,0,0,2163,2164,5,66,0,0,2164,2165,5,83,0,0,2165,
	2166,5,84,0,0,2166,2167,5,82,0,0,2167,440,1,0,0,0,2168,2169,5,83,0,0,2169,
	2170,5,85,0,0,2170,2171,5,66,0,0,2171,2172,5,83,0,0,2172,2173,5,84,0,0,
	2173,2174,5,82,0,0,2174,2175,5,73,0,0,2175,2176,5,78,0,0,2176,2177,5,71,
	0,0,2177,442,1,0,0,0,2178,2179,5,84,0,0,2179,2180,5,65,0,0,2180,2181,5,
	66,0,0,2181,2182,5,76,0,0,2182,2183,5,69,0,0,2183,444,1,0,0,0,2184,2185,
	5,84,0,0,2185,2186,5,65,0,0,2186,2187,5,66,0,0,2187,2188,5,76,0,0,2188,
	2189,5,69,0,0,2189,2190,5,83,0,0,2190,446,1,0,0,0,2191,2192,5,84,0,0,2192,
	2193,5,65,0,0,2193,2194,5,66,0,0,2194,2195,5,76,0,0,2195,2196,5,69,0,0,
	2196,2197,5,83,0,0,2197,2198,5,65,0,0,2198,2199,5,77,0,0,2199,2200,5,80,
	0,0,2200,2201,5,76,0,0,2201,2202,5,69,0,0,2202,448,1,0,0,0,2203,2204,5,
	84,0,0,2204,2205,5,66,0,0,2205,2206,5,76,0,0,2206,2207,5,80,0,0,2207,2208,
	5,82,0,0,2208,2209,5,79,0,0,2209,2210,5,80,0,0,2210,2211,5,69,0,0,2211,
	2212,5,82,0,0,2212,2213,5,84,0,0,2213,2214,5,73,0,0,2214,2215,5,69,0,0,
	2215,2216,5,83,0,0,2216,450,1,0,0,0,2217,2218,5,84,0,0,2218,2219,5,69,0,
	0,2219,2220,5,77,0,0,2220,2221,5,80,0,0,2221,2222,5,79,0,0,2222,2223,5,
	82,0,0,2223,2224,5,65,0,0,2224,2225,5,82,0,0,2225,2231,5,89,0,0,2226,2227,
	5,84,0,0,2227,2228,5,69,0,0,2228,2229,5,77,0,0,2229,2231,5,80,0,0,2230,
	2217,1,0,0,0,2230,2226,1,0,0,0,2231,452,1,0,0,0,2232,2233,5,84,0,0,2233,
	2234,5,69,0,0,2234,2235,5,82,0,0,2235,2236,5,77,0,0,2236,2237,5,73,0,0,
	2237,2238,5,78,0,0,2238,2239,5,65,0,0,2239,2240,5,84,0,0,2240,2241,5,69,
	0,0,2241,2242,5,68,0,0,2242,454,1,0,0,0,2243,2244,5,84,0,0,2244,2245,5,
	72,0,0,2245,2246,5,69,0,0,2246,2247,5,78,0,0,2247,456,1,0,0,0,2248,2249,
	5,84,0,0,2249,2250,5,73,0,0,2250,2251,5,77,0,0,2251,2252,5,69,0,0,2252,
	458,1,0,0,0,2253,2254,5,84,0,0,2254,2255,5,79,0,0,2255,460,1,0,0,0,2256,
	2257,5,84,0,0,2257,2258,5,79,0,0,2258,2259,5,85,0,0,2259,2260,5,67,0,0,
	2260,2261,5,72,0,0,2261,462,1,0,0,0,2262,2263,5,84,0,0,2263,2264,5,82,0,
	0,2264,2265,5,65,0,0,2265,2266,5,73,0,0,2266,2267,5,76,0,0,2267,2268,5,
	73,0,0,2268,2269,5,78,0,0,2269,2270,5,71,0,0,2270,464,1,0,0,0,2271,2272,
	5,84,0,0,2272,2273,5,82,0,0,2273,2274,5,65,0,0,2274,2275,5,78,0,0,2275,
	2276,5,83,0,0,2276,2277,5,65,0,0,2277,2278,5,67,0,0,2278,2279,5,84,0,0,
	2279,2280,5,73,0,0,2280,2281,5,79,0,0,2281,2282,5,78,0,0,2282,466,1,0,0,
	0,2283,2284,5,84,0,0,2284,2285,5,82,0,0,2285,2286,5,65,0,0,2286,2287,5,
	78,0,0,2287,2288,5,83,0,0,2288,2289,5,65,0,0,2289,2290,5,67,0,0,2290,2291,
	5,84,0,0,2291,2292,5,73,0,0,2292,2293,5,79,0,0,2293,2294,5,78,0,0,2294,
	2295,5,83,0,0,2295,468,1,0,0,0,2296,2297,5,84,0,0,2297,2298,5,82,0,0,2298,
	2299,5,65,0,0,2299,2300,5,78,0,0,2300,2301,5,83,0,0,2301,2302,5,70,0,0,
	2302,2303,5,79,0,0,2303,2304,5,82,0,0,2304,2305,5,77,0,0,2305,470,1,0,0,
	0,2306,2307,5,84,0,0,2307,2308,5,82,0,0,2308,2309,5,73,0,0,2309,2310,5,
	77,0,0,2310,472,1,0,0,0,2311,2312,5,84,0,0,2312,2313,5,82,0,0,2313,2314,
	5,85,0,0,2314,2315,5,69,0,0,2315,474,1,0,0,0,2316,2317,5,84,0,0,2317,2318,
	5,82,0,0,2318,2319,5,85,0,0,2319,2320,5,78,0,0,2320,2321,5,67,0,0,2321,
	2322,5,65,0,0,2322,2323,5,84,0,0,2323,2324,5,69,0,0,2324,476,1,0,0,0,2325,
	2326,5,84,0,0,2326,2327,5,89,0,0,2327,2328,5,80,0,0,2328,2329,5,69,0,0,
	2329,478,1,0,0,0,2330,2331,5,85,0,0,2331,2332,5,78,0,0,2332,2333,5,65,0,
	0,2333,2334,5,82,0,0,2334,2335,5,67,0,0,2335,2336,5,72,0,0,2336,2337,5,
	73,0,0,2337,2338,5,86,0,0,2338,2339,5,69,0,0,2339,480,1,0,0,0,2340,2341,
	5,85,0,0,2341,2342,5,78,0,0,2342,2343,5,66,0,0,2343,2344,5,79,0,0,2344,
	2345,5,85,0,0,2345,2346,5,78,0,0,2346,2347,5,68,0,0,2347,2348,5,69,0,0,
	2348,2349,5,68,0,0,2349,482,1,0,0,0,2350,2351,5,85,0,0,2351,2352,5,78,0,
	0,2352,2353,5,67,0,0,2353,2354,5,65,0,0,2354,2355,5,67,0,0,2355,2356,5,
	72,0,0,2356,2357,5,69,0,0,2357,484,1,0,0,0,2358,2359,5,85,0,0,2359,2360,
	5,78,0,0,2360,2361,5,73,0,0,2361,2362,5,79,0,0,2362,2363,5,78,0,0,2363,
	486,1,0,0,0,2364,2365,5,85,0,0,2365,2366,5,78,0,0,2366,2367,5,73,0,0,2367,
	2368,5,81,0,0,2368,2369,5,85,0,0,2369,2370,5,69,0,0,2370,488,1,0,0,0,2371,
	2372,5,85,0,0,2372,2373,5,78,0,0,2373,2374,5,75,0,0,2374,2375,5,78,0,0,
	2375,2376,5,79,0,0,2376,2377,5,87,0,0,2377,2378,5,78,0,0,2378,490,1,0,0,
	0,2379,2380,5,85,0,0,2380,2381,5,78,0,0,2381,2382,5,76,0,0,2382,2383,5,
	79,0,0,2383,2384,5,67,0,0,2384,2385,5,75,0,0,2385,492,1,0,0,0,2386,2387,
	5,85,0,0,2387,2388,5,78,0,0,2388,2389,5,83,0,0,2389,2390,5,69,0,0,2390,
	2391,5,84,0,0,2391,494,1,0,0,0,2392,2393,5,85,0,0,2393,2394,5,80,0,0,2394,
	2395,5,68,0,0,2395,2396,5,65,0,0,2396,2397,5,84,0,0,2397,2398,5,69,0,0,
	2398,496,1,0,0,0,2399,2400,5,85,0,0,2400,2401,5,83,0,0,2401,2402,5,69,0,
	0,2402,498,1,0,0,0,2403,2404,5,85,0,0,2404,2405,5,83,0,0,2405,2406,5,69,
	0,0,2406,2407,5,82,0,0,2407,500,1,0,0,0,2408,2409,5,85,0,0,2409,2410,5,
	83,0,0,2410,2411,5,73,0,0,2411,2412,5,78,0,0,2412,2413,5,71,0,0,2413,502,
	1,0,0,0,2414,2415,5,86,0,0,2415,2416,5,65,0,0,2416,2417,5,76,0,0,2417,2418,
	5,85,0,0,2418,2419,5,69,0,0,2419,2420,5,83,0,0,2420,504,1,0,0,0,2421,2422,
	5,86,0,0,2422,2423,5,73,0,0,2423,2424,5,69,0,0,2424,2425,5,87,0,0,2425,
	506,1,0,0,0,2426,2427,5,86,0,0,2427,2428,5,73,0,0,2428,2429,5,69,0,0,2429,
	2430,5,87,0,0,2430,2431,5,83,0,0,2431,508,1,0,0,0,2432,2433,5,87,0,0,2433,
	2434,5,72,0,0,2434,2435,5,69,0,0,2435,2436,5,78,0,0,2436,510,1,0,0,0,2437,
	2438,5,87,0,0,2438,2439,5,72,0,0,2439,2440,5,69,0,0,2440,2441,5,82,0,0,
	2441,2442,5,69,0,0,2442,512,1,0,0,0,2443,2444,5,87,0,0,2444,2445,5,73,0,
	0,2445,2446,5,78,0,0,2446,2447,5,68,0,0,2447,2448,5,79,0,0,2448,2449,5,
	87,0,0,2449,514,1,0,0,0,2450,2451,5,87,0,0,2451,2452,5,73,0,0,2452,2453,
	5,84,0,0,2453,2454,5,72,0,0,2454,516,1,0,0,0,2455,2456,5,90,0,0,2456,2457,
	5,79,0,0,2457,2458,5,78,0,0,2458,2459,5,69,0,0,2459,518,1,0,0,0,2460,2464,
	5,61,0,0,2461,2462,5,61,0,0,2462,2464,5,61,0,0,2463,2460,1,0,0,0,2463,2461,
	1,0,0,0,2464,520,1,0,0,0,2465,2466,5,60,0,0,2466,2467,5,61,0,0,2467,2468,
	5,62,0,0,2468,522,1,0,0,0,2469,2470,5,60,0,0,2470,2471,5,62,0,0,2471,524,
	1,0,0,0,2472,2473,5,33,0,0,2473,2474,5,61,0,0,2474,526,1,0,0,0,2475,2476,
	5,60,0,0,2476,528,1,0,0,0,2477,2478,5,60,0,0,2478,2482,5,61,0,0,2479,2480,
	5,33,0,0,2480,2482,5,62,0,0,2481,2477,1,0,0,0,2481,2479,1,0,0,0,2482,530,
	1,0,0,0,2483,2484,5,62,0,0,2484,532,1,0,0,0,2485,2486,5,62,0,0,2486,2490,
	5,61,0,0,2487,2488,5,33,0,0,2488,2490,5,60,0,0,2489,2485,1,0,0,0,2489,2487,
	1,0,0,0,2490,534,1,0,0,0,2491,2492,5,43,0,0,2492,536,1,0,0,0,2493,2494,
	5,45,0,0,2494,538,1,0,0,0,2495,2496,5,42,0,0,2496,540,1,0,0,0,2497,2498,
	5,47,0,0,2498,542,1,0,0,0,2499,2500,5,37,0,0,2500,544,1,0,0,0,2501,2502,
	5,126,0,0,2502,546,1,0,0,0,2503,2504,5,38,0,0,2504,548,1,0,0,0,2505,2506,
	5,124,0,0,2506,550,1,0,0,0,2507,2508,5,124,0,0,2508,2509,5,124,0,0,2509,
	552,1,0,0,0,2510,2511,5,94,0,0,2511,554,1,0,0,0,2512,2513,5,59,0,0,2513,
	556,1,0,0,0,2514,2520,5,39,0,0,2515,2519,8,0,0,0,2516,2517,5,92,0,0,2517,
	2519,9,0,0,0,2518,2515,1,0,0,0,2518,2516,1,0,0,0,2519,2522,1,0,0,0,2520,
	2518,1,0,0,0,2520,2521,1,0,0,0,2521,2523,1,0,0,0,2522,2520,1,0,0,0,2523,
	2535,5,39,0,0,2524,2530,5,34,0,0,2525,2529,8,1,0,0,2526,2527,5,92,0,0,2527,
	2529,9,0,0,0,2528,2525,1,0,0,0,2528,2526,1,0,0,0,2529,2532,1,0,0,0,2530,
	2528,1,0,0,0,2530,2531,1,0,0,0,2531,2533,1,0,0,0,2532,2530,1,0,0,0,2533,
	2535,5,34,0,0,2534,2514,1,0,0,0,2534,2524,1,0,0,0,2535,558,1,0,0,0,2536,
	2538,3,587,293,0,2537,2536,1,0,0,0,2538,2539,1,0,0,0,2539,2537,1,0,0,0,
	2539,2540,1,0,0,0,2540,2541,1,0,0,0,2541,2542,5,76,0,0,2542,560,1,0,0,0,
	2543,2545,3,587,293,0,2544,2543,1,0,0,0,2545,2546,1,0,0,0,2546,2544,1,0,
	0,0,2546,2547,1,0,0,0,2547,2548,1,0,0,0,2548,2549,5,83,0,0,2549,562,1,0,
	0,0,2550,2552,3,587,293,0,2551,2550,1,0,0,0,2552,2553,1,0,0,0,2553,2551,
	1,0,0,0,2553,2554,1,0,0,0,2554,2555,1,0,0,0,2555,2556,5,89,0,0,2556,564,
	1,0,0,0,2557,2559,3,587,293,0,2558,2557,1,0,0,0,2559,2560,1,0,0,0,2560,
	2558,1,0,0,0,2560,2561,1,0,0,0,2561,566,1,0,0,0,2562,2564,3,587,293,0,2563,
	2562,1,0,0,0,2564,2565,1,0,0,0,2565,2563,1,0,0,0,2565,2566,1,0,0,0,2566,
	2567,1,0,0,0,2567,2568,3,585,292,0,2568,2574,1,0,0,0,2569,2570,3,583,291,
	0,2570,2571,3,585,292,0,2571,2572,4,283,0,0,2572,2574,1,0,0,0,2573,2563,
	1,0,0,0,2573,2569,1,0,0,0,2574,568,1,0,0,0,2575,2576,3,583,291,0,2576,2577,
	4,284,1,0,2577,570,1,0,0,0,2578,2580,3,587,293,0,2579,2578,1,0,0,0,2580,
	2581,1,0,0,0,2581,2579,1,0,0,0,2581,2582,1,0,0,0,2582,2584,1,0,0,0,2583,
	2585,3,585,292,0,2584,2583,1,0,0,0,2584,2585,1,0,0,0,2585,2586,1,0,0,0,
	2586,2587,5,70,0,0,2587,2596,1,0,0,0,2588,2590,3,583,291,0,2589,2591,3,
	585,292,0,2590,2589,1,0,0,0,2590,2591,1,0,0,0,2591,2592,1,0,0,0,2592,2593,
	5,70,0,0,2593,2594,4,285,2,0,2594,2596,1,0,0,0,2595,2579,1,0,0,0,2595,2588,
	1,0,0,0,2596,572,1,0,0,0,2597,2599,3,587,293,0,2598,2597,1,0,0,0,2599,2600,
	1,0,0,0,2600,2598,1,0,0,0,2600,2601,1,0,0,0,2601,2603,1,0,0,0,2602,2604,
	3,585,292,0,2603,2602,1,0,0,0,2603,2604,1,0,0,0,2604,2605,1,0,0,0,2605,
	2606,5,68,0,0,2606,2615,1,0,0,0,2607,2609,3,583,291,0,2608,2610,3,585,292,
	0,2609,2608,1,0,0,0,2609,2610,1,0,0,0,2610,2611,1,0,0,0,2611,2612,5,68,
	0,0,2612,2613,4,286,3,0,2613,2615,1,0,0,0,2614,2598,1,0,0,0,2614,2607,1,
	0,0,0,2615,574,1,0,0,0,2616,2618,3,587,293,0,2617,2616,1,0,0,0,2618,2619,
	1,0,0,0,2619,2617,1,0,0,0,2619,2620,1,0,0,0,2620,2622,1,0,0,0,2621,2623,
	3,585,292,0,2622,2621,1,0,0,0,2622,2623,1,0,0,0,2623,2624,1,0,0,0,2624,
	2625,5,66,0,0,2625,2626,5,68,0,0,2626,2637,1,0,0,0,2627,2629,3,583,291,
	0,2628,2630,3,585,292,0,2629,2628,1,0,0,0,2629,2630,1,0,0,0,2630,2631,1,
	0,0,0,2631,2632,5,66,0,0,2632,2633,5,68,0,0,2633,2634,1,0,0,0,2634,2635,
	4,287,4,0,2635,2637,1,0,0,0,2636,2617,1,0,0,0,2636,2627,1,0,0,0,2637,576,
	1,0,0,0,2638,2643,3,589,294,0,2639,2643,3,587,293,0,2640,2643,5,95,0,0,
	2641,2643,3,581,290,0,2642,2638,1,0,0,0,2642,2639,1,0,0,0,2642,2640,1,0,
	0,0,2642,2641,1,0,0,0,2643,2644,1,0,0,0,2644,2642,1,0,0,0,2644,2645,1,0,
	0,0,2645,578,1,0,0,0,2646,2652,5,96,0,0,2647,2651,8,2,0,0,2648,2649,5,96,
	0,0,2649,2651,5,96,0,0,2650,2647,1,0,0,0,2650,2648,1,0,0,0,2651,2654,1,
	0,0,0,2652,2650,1,0,0,0,2652,2653,1,0,0,0,2653,2655,1,0,0,0,2654,2652,1,
	0,0,0,2655,2656,5,96,0,0,2656,580,1,0,0,0,2657,2658,5,36,0,0,2658,2659,
	5,123,0,0,2659,2660,1,0,0,0,2660,2661,3,577,288,0,2661,2662,5,125,0,0,2662,
	582,1,0,0,0,2663,2665,3,587,293,0,2664,2663,1,0,0,0,2665,2666,1,0,0,0,2666,
	2664,1,0,0,0,2666,2667,1,0,0,0,2667,2668,1,0,0,0,2668,2672,5,46,0,0,2669,
	2671,3,587,293,0,2670,2669,1,0,0,0,2671,2674,1,0,0,0,2672,2670,1,0,0,0,
	2672,2673,1,0,0,0,2673,2682,1,0,0,0,2674,2672,1,0,0,0,2675,2677,5,46,0,
	0,2676,2678,3,587,293,0,2677,2676,1,0,0,0,2678,2679,1,0,0,0,2679,2677,1,
	0,0,0,2679,2680,1,0,0,0,2680,2682,1,0,0,0,2681,2664,1,0,0,0,2681,2675,1,
	0,0,0,2682,584,1,0,0,0,2683,2685,5,69,0,0,2684,2686,7,3,0,0,2685,2684,1,
	0,0,0,2685,2686,1,0,0,0,2686,2688,1,0,0,0,2687,2689,3,587,293,0,2688,2687,
	1,0,0,0,2689,2690,1,0,0,0,2690,2688,1,0,0,0,2690,2691,1,0,0,0,2691,586,
	1,0,0,0,2692,2693,7,4,0,0,2693,588,1,0,0,0,2694,2695,7,5,0,0,2695,590,1,
	0,0,0,2696,2697,5,45,0,0,2697,2698,5,45,0,0,2698,2704,1,0,0,0,2699,2700,
	5,92,0,0,2700,2703,5,10,0,0,2701,2703,8,6,0,0,2702,2699,1,0,0,0,2702,2701,
	1,0,0,0,2703,2706,1,0,0,0,2704,2702,1,0,0,0,2704,2705,1,0,0,0,2705,2708,
	1,0,0,0,2706,2704,1,0,0,0,2707,2709,5,13,0,0,2708,2707,1,0,0,0,2708,2709,
	1,0,0,0,2709,2711,1,0,0,0,2710,2712,5,10,0,0,2711,2710,1,0,0,0,2711,2712,
	1,0,0,0,2712,2713,1,0,0,0,2713,2714,6,295,0,0,2714,592,1,0,0,0,2715,2716,
	5,47,0,0,2716,2717,5,42,0,0,2717,2718,1,0,0,0,2718,2723,4,296,5,0,2719,
	2722,3,593,296,0,2720,2722,9,0,0,0,2721,2719,1,0,0,0,2721,2720,1,0,0,0,
	2722,2725,1,0,0,0,2723,2724,1,0,0,0,2723,2721,1,0,0,0,2724,2726,1,0,0,0,
	2725,2723,1,0,0,0,2726,2727,5,42,0,0,2727,2728,5,47,0,0,2728,2729,1,0,0,
	0,2729,2730,6,296,0,0,2730,594,1,0,0,0,2731,2733,7,7,0,0,2732,2731,1,0,
	0,0,2733,2734,1,0,0,0,2734,2732,1,0,0,0,2734,2735,1,0,0,0,2735,2736,1,0,
	0,0,2736,2737,6,297,0,0,2737,596,1,0,0,0,2738,2739,9,0,0,0,2739,598,1,0,
	0,0,48,0,1020,1629,1975,2230,2463,2481,2489,2518,2520,2528,2530,2534,2539,
	2546,2553,2560,2565,2573,2581,2584,2590,2595,2600,2603,2609,2614,2619,2622,
	2629,2636,2642,2644,2650,2652,2666,2672,2679,2681,2685,2690,2702,2704,2708,
	2711,2721,2723,2734,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SparkSqlLexer.__ATN) {
			SparkSqlLexer.__ATN = new ATNDeserializer().deserialize(SparkSqlLexer._serializedATN);
		}

		return SparkSqlLexer.__ATN;
	}


	static DecisionsToDFA = SparkSqlLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}