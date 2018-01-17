import json
start_indentation = 2

def log(val, ind):
    print '-'*ind + '>' + val

def print_children_r(children, ind):
    for child in children:
        log(child['name'], ind)
        if child['children']:
            print_children_r(child['children'], ind+5)

def print_menu(items):
    for m_i in items:
        log(m_i['name'], start_indentation)
        print_children_r(m_i['children'], start_indentation*2)


if __name__ == '__main__':
    with open('foodyo_output.txt', 'rb') as f:
        j_data = json.load(f)
    recos = j_data['body']['Recommendations']
    for r in recos:
        print r['RestaurantName']
        menu_items = r['menu']
        print_menu(menu_items)
        print '\n'


