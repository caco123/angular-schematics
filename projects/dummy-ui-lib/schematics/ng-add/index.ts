import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { Observable } from 'rxjs';
export function ngAdd(): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ): Tree | Observable<Tree> | Rule | Promise<void | Rule> | void => {
    context.logger.info('Installing dependencies..');
    context.addTask(new NodePackageInstallTask({}));
    return tree;
  };
}
